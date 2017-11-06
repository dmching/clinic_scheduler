package maven.repositories;

import maven.objects.Reservation;

import java.sql.*;
import java.util.List;

public class ReservationConnection implements RepositoryConnection<Reservation> {

    private static final String POST_RESERVATION = "INSERT INTO tlu_clinic_db.reservations (athlete_id, at_id, time_slot_id, schedule_date) VALUES (?, ?, ?, ?)";

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
        } catch (SQLException e) {
            e.printStackTrace();
            result = false;
        }
        return result;
    }

    @Override
    public List<Reservation> getResults(ResultSet resultSet) {
        /*List<Reservation> reservations = new ArrayList<Reservation>();
        Athlete athelte = new Athlete();
        AthleticTrainer athleticTrainer = new AthleticTrainer();

        if (resultSet != null) {
            try {
                Reservation currentReservation;
                while (resultSet.next()) {
                    currentReservation = new Reservation();


                    // User values
                    athelte.getUser().setUserId(resultSet.getInt(1));
                    athelte.getUser().setUsername(resultSet.getString(2));
                    athelte.getUser().setPassword(resultSet.getString(3));
                    athelte.getUser().setFirstName(resultSet.getString(4));
                    athelte.getUser().setLastName(resultSet.getString(5));

                    currentReservation.setReservationId(resultSet.getInt(6));
                    currentReservation.setComplaint(resultSet.getString(8));
                    currentReservation.setLastVisit(resultSet.getDate(9));
                    currentReservation.setPrimarySport(resultSet.getString(10));
                    currentReservation.setSecondarySport(resultSet.getString(11));

                    reservations.add(currentReservation);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (reservations.isEmpty())
            return null;
        else
            // This should never return more than one row.
            return reservations;*/
        return null;
    }
}
