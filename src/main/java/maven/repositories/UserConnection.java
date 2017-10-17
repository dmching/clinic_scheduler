package maven.repositories;

import maven.objects.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserConnection implements RepositoryConnection{

    private Connection connection;
    private ResultSet resultSet;
    private User user;

    public UserConnection() {
        try {
            Class.forName(JDBC_DRIVER);
            this.connection = DriverManager.getConnection(DB_URL,
                    USER, PASS);
        } catch(Exception e) {
            // Handles errors for Class.forName
            e.printStackTrace();
        }
    }

    public User getUser(String username, String password) {
        try {
            String sql = "select * from tlu_clinic_db.users where username=? and password=?";
            PreparedStatement preparedStatement
                    = connection.prepareStatement(sql);
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            this.resultSet = preparedStatement.executeQuery();

        } catch(SQLException se) {
            se.printStackTrace();
        }

        return this.getResults(this.resultSet).get(0);
    }

    public List<User> getUsers() {
        try {
            Statement statement = connection.createStatement();
            this.resultSet = statement.executeQuery("SELECT * FROM tlu_clinic_db.users;");
        } catch(SQLException se) {
            se.printStackTrace();
        }
        return this.getResults(this.resultSet);
    }

    @Override
    public Object select() {
        return null;
    }

    @Override
    public boolean update() {
        return false;
    }

    @Override
    public boolean insert() {
        return false;
    }

    @Override
    public boolean delete() {
        return false;
    }

    public List<User> getResults(ResultSet resultSet) {
        List<User> users = new ArrayList<User>();

        if (resultSet != null) {
            try {
                User currentUser;
                while (resultSet.next()) {
                    currentUser = new User();
                    currentUser.setUserId(resultSet.getInt(1));
                    currentUser.setUsername(resultSet.getString(2));
                    currentUser.setPassword(resultSet.getString(3));
                    currentUser.setFirstName(resultSet.getString(4));
                    currentUser.setLastName(resultSet.getString(5));
                    users.add(currentUser);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        if (users.isEmpty())
            return null;
        else
            // This should never return more than one row.
            return users;
    }
}
