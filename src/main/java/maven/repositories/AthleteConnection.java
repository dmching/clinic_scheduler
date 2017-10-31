package maven.repositories;

import maven.objects.Athlete;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AthleteConnection implements RepositoryConnection<Athlete>{
    private static final String GET_ATHLETE = "SELECT * FROM tlu_clinic_db.users as users, tlu_clinic_db.athletes as athletes WHERE users.username=? AND users.password=? AND users.id = athletes.user_id";

    private Connection connection;
    private ResultSet resultSet;

    public AthleteConnection() {
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

    public Athlete getAthlete(String username, String password) {
        try {
            PreparedStatement preparedStatement = this.connection.prepareStatement(GET_ATHLETE);
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            this.resultSet = preparedStatement.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return this.getResults(this.resultSet).get(0);
    }

    @Override
    public List<Athlete> getResults(ResultSet resultSet) {
        List<Athlete> athletes = new ArrayList<Athlete>();

        if (resultSet != null) {
            try {
                Athlete currentAthlete;
                while (resultSet.next()) {
                    currentAthlete = new Athlete();

                    // User values
                    currentAthlete.getUser().setUserId(resultSet.getInt(1));
                    currentAthlete.getUser().setUsername(resultSet.getString(2));
                    currentAthlete.getUser().setPassword(resultSet.getString(3));
                    currentAthlete.getUser().setFirstName(resultSet.getString(4));
                    currentAthlete.getUser().setLastName(resultSet.getString(5));

                    currentAthlete.setAthleteId(resultSet.getInt(6));
                    currentAthlete.setComplaint(resultSet.getString(8));
                    currentAthlete.setLastVisit(resultSet.getDate(9));
                    currentAthlete.setPrimarySport(resultSet.getString(10));
                    currentAthlete.setSecondarySport(resultSet.getString(11));

                    athletes.add(currentAthlete);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (athletes.isEmpty())
            return null;
        else
            // This should never return more than one row.
            return athletes;
    }
}
