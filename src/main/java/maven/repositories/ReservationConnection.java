package maven.repositories;

import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import maven.objects.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ReservationConnection implements RepositoryConnection<Reservation> {

    private static final String POST_RESERVATION = "INSERT INTO tlu_clinic_db.reservations (athlete_id, at_id, time_slot_id, schedule_date) VALUES (?, ?, ?, ?)";
    private static final String GET_ATHLETE_RESERVATIONS =
            "SELECT * FROM tlu_clinic_db.users as users, tlu_clinic_db.athletic_trainers as athletic_trainers, tlu_clinic_db.classifications as classifications, tlu_clinic_db.athletes as athletes, " +
            "tlu_clinic_db.time_slots as time_slots, tlu_clinic_db.reservations as reservations WHERE reservations.at_id = athletic_trainers.id " +
            "and reservations.athlete_id = athletes.id and reservations.time_slot_id = time_slots.id and users.id = athletic_trainers.user_id " +
            "and classifications.id = athletic_trainers.classification_id and athletes.id=?";
    private static final String GET_AT_RESERVATIONS =
            "SELECT * FROM tlu_clinic_db.users as users, tlu_clinic_db.athletic_trainers as athletic_trainers, tlu_clinic_db.classifications as classifications, tlu_clinic_db.athletes as athletes, " +
            "tlu_clinic_db.time_slots as time_slots, tlu_clinic_db.reservations as reservations WHERE reservations.at_id = athletic_trainers.id " +
            "and reservations.athlete_id = athletes.id and reservations.time_slot_id = time_slots.id and users.id = athletes.user_id " +
            "and classifications.id = athletic_trainers.classification_id and athletic_trainers.id=?";

    private Connection connection;
    private ResultSet resultSet;

    public ReservationConnection() {
        try {
            Class.forName(JDBC_DRIVER);
            this.connection = DriverManager.getConnection(DB_URL,
                    USER, PASS);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public boolean postReservation(Integer athleteID, Integer atID, Integer timeslotID, String scheduledDate) {

        boolean result;
        try {
            PreparedStatement preparedStatement = this.connection.prepareStatement(POST_RESERVATION);
            preparedStatement.setInt(1, athleteID);
            preparedStatement.setInt(2, atID);
            preparedStatement.setInt(3, timeslotID);
            preparedStatement.setString(4, scheduledDate);

            preparedStatement.executeUpdate();
            result = true;
        } catch (MySQLIntegrityConstraintViolationException e) {
            // Attempting to create a reservation by the same athlete with the same athletic trainer
            // in the same time slot on the same day.
            result = false;
        } catch (SQLException e) {
            e.printStackTrace();
            result = false;
        }
        return result;
    }

    // Gets the reservations for either an athelte or an athletic trainer.
    public List<Reservation> getReservations(int id, boolean isAthlete) {
        try {
            String sql;
            if (isAthlete)
                sql = GET_ATHLETE_RESERVATIONS;
            else
                sql = GET_AT_RESERVATIONS;

            PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
            preparedStatement.setInt(1, id);
            this.resultSet = preparedStatement.executeQuery();
            return this.getResults(this.resultSet);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Reservation> getResults(ResultSet resultSet) {
        List<Reservation> reservations = new ArrayList<Reservation>();

        if (resultSet != null) {
            try {
                Reservation currentReservation;
                while (resultSet.next()) {
                    currentReservation = new Reservation();
                    User user = new User();
                    Athlete athlete = new Athlete();
                    AthleticTrainer athleticTrainer = new AthleticTrainer();
                    TimeSlot timeSlot = new TimeSlot();

                    // Receive User, Athletic Trainer, Classification, Athlete, Reservation, time_slots

                    // User values
                    user.setUserId(resultSet.getInt(1));
                    user.setUsername(resultSet.getString(2));
                    user.setPassword(resultSet.getString(3));
                    user.setFirstName(resultSet.getString(4));
                    user.setLastName(resultSet.getString(5));

                    // Depending on who is pulling from reservations, user is either the Athlete or the Athletic Trainer.
                    // Will handle on the front-end.
                    athleticTrainer.setId(resultSet.getInt(6));
                    athleticTrainer.setUser(user);
                    athleticTrainer.setPrimarySport(resultSet.getString(9));
                    athleticTrainer.setClassification(resultSet.getString(11));

                    //Athlete Values
                    athlete.setId(resultSet.getInt(12));
                    athlete.setUser(user);
                    athlete.setComplaint(resultSet.getString(14));
                    athlete.setLastVisit(resultSet.getDate(15));
                    athlete.setPrimarySport(resultSet.getString(16));
                    athlete.setSecondarySport(resultSet.getString(17));

                    // Time Slot values
                    timeSlot.setId(resultSet.getInt(18));
                    timeSlot.setStartTime(resultSet.getString(19));
                    timeSlot.setEndTime(resultSet.getString(20));

                    // Put them all together.
                    currentReservation.setId(resultSet.getInt(21));
                    currentReservation.setAthlete(athlete);
                    currentReservation.setAthleticTrainer(athleticTrainer);
                    currentReservation.setTimeSlot(timeSlot);
                    currentReservation.setScheduledDate(resultSet.getString(25));

                    reservations.add(currentReservation);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return reservations;
    }
}
