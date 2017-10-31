package maven.repositories;

import java.sql.ResultSet;
import java.util.List;

public interface RepositoryConnection<T> {
    String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    String DB_URL = "jdbc:mysql://localhost";
    String USER = "root";
    String PASS = "csci437";

    // Converts the ResultSet into the specific java object requested.
    List<T> getResults(ResultSet resultSet);
}
