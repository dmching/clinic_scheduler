package maven.repositories;

import maven.objects.Athlete;
import maven.objects.AthleticTrainer;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ATConnection implements RepositoryConnection<AthleticTrainer> {
    private static final String GET_AT = "SELECT users.*, athletic_trainers.id, classifications.name FROM tlu_clinic_db.users as users, tlu_clinic_db.athletic_trainers as athletic_trainers, tlu_clinic_db.classifications as classifications WHERE users.username=? AND users.password=? AND users.id = athletic_trainers.user_id AND athletic_trainers.classification_id = classifications.id";

    private Connection connection;
    private ResultSet resultSet;

    public ATConnection() {
        try {
            Class.forName(JDBC_DRIVER);
            this.connection = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public AthleticTrainer getAthleticTrainer(String username, String password) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(GET_AT);
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            this.resultSet = preparedStatement.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return this.getResults(this.resultSet).get(0);
    }

    @Override
    public List<AthleticTrainer> getResults(ResultSet resultSet) {
        List<AthleticTrainer> athleticTrainers = new ArrayList<AthleticTrainer>();
        
        if (resultSet != null) {
            try {
                AthleticTrainer currentAT;
                while (resultSet.next()) {
                    currentAT = new AthleticTrainer();

                    // User values
                    currentAT.getUser().setUserId(resultSet.getInt(1));
                    currentAT.getUser().setUsername(resultSet.getString(2));
                    currentAT.getUser().setPassword(resultSet.getString(3));
                    currentAT.getUser().setFirstName(resultSet.getString(4));
                    currentAT.getUser().setLastName(resultSet.getString(5));

                    currentAT.setId(resultSet.getInt(6));
                    currentAT.setClassification(resultSet.getString(7));

                    athleticTrainers.add(currentAT);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (athleticTrainers.isEmpty())
            return null;
        else
            // This should never return more than one row.
            return athleticTrainers;
    }
}
