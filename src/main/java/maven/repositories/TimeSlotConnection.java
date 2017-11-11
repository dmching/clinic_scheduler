package maven.repositories;

import jdk.nashorn.internal.objects.annotations.Getter;
import maven.objects.TimeSlot;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TimeSlotConnection implements RepositoryConnection<TimeSlot> {

    private static final String GET_TIME_SLOTS = "SELECT * FROM tlu_clinic_db.time_slots";

    private Connection connection;
    private ResultSet resultSet;

    public TimeSlotConnection() {
        try {
            Class.forName(JDBC_DRIVER);
            this.connection = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<TimeSlot> getTimes() {
        try {
            Statement statement = this.connection.createStatement();
            this.resultSet = statement.executeQuery(GET_TIME_SLOTS);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return this.getResults(this.resultSet);
    }

    @Override
    public List<TimeSlot> getResults(ResultSet resultSet) {
        List<TimeSlot> timeSlots = new ArrayList<TimeSlot>();

        if (resultSet != null) {
            try {
                TimeSlot currentTime;
                while (resultSet.next()) {
                    currentTime = new TimeSlot();

                    // User values
                    currentTime.setId(resultSet.getInt(1));
                    currentTime.setStartTime(resultSet.getString(2));
                    currentTime.setEndTime(resultSet.getString(3));

                    timeSlots.add(currentTime);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }


        return timeSlots;
    }
}
