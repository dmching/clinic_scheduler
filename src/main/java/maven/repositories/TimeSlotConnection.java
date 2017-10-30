package maven.repositories;

import maven.objects.TimeSlot;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.List;

public class TimeSlotConnection implements RepositoryConnection<TimeSlot> {

    private static final String GET_TIME_SLOTS = "";

    private Connection connection;
    private ResultSet resultSet;

    @Override
    public List<TimeSlot> getResults(ResultSet resultSet) {
        return null;
    }
}
