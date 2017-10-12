package src.main.java;

import src.main.java.objects.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Blank {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost";

    static final String USER = "root";
    static final String PASS = "csci437";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        User user = new User();

        try {
            Class.forName(JDBC_DRIVER);

            //STEP 3: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);

            stmt = conn.createStatement();
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM tlu_clinic_db.users;");
            List<User> users = new ArrayList<User>();
            User currentUser = new User();

            while (resultSet.next()) {
                currentUser = new User();
                currentUser.setUserId(resultSet.getInt(1));
                currentUser.setUsername(resultSet.getString(2));
                currentUser.setPassword(resultSet.getString(3));
                System.out.println(currentUser);
            }

        }catch(SQLException se){
            //Handle errors for JDBC
            se.printStackTrace();
        }catch(Exception e){
            //Handle errors for Class.forName
            e.printStackTrace();
        }finally{
            //finally block used to close resources
            try{
                if(stmt!=null)
                    stmt.close();
            }catch(SQLException se2){
            }// nothing we can do
            try{
                if(conn!=null)
                    conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
    }
}