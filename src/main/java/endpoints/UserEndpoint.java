package src.main.java.endpoints;

import src.main.java.objects.User;
import src.main.java.repositories.UserConnection;

public class UserEndpoint {

    public static void main(String[] args) {
        UserConnection connection = new UserConnection();
        User user = connection.getUser("dmching", "test1");

        System.out.println();
    }
}
