package maven.repositories;

public interface RepositoryConnection {
    String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    String DB_URL = "jdbc:mysql://localhost";
    String USER = "root";
    String PASS = "csci437";

    public Object select();
    public boolean update();
    public boolean insert();
    public boolean delete();
}
