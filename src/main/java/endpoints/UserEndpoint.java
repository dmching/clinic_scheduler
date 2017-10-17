package endpoints;

import jdk.nashorn.internal.objects.annotations.Getter;
import objects.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import repositories.UserConnection;

import java.util.List;

@RestController
public class UserEndpoint {

    @RequestMapping("/user/login")
    @Getter
    public User getUser(@RequestParam(value="username") String username,
                        @RequestParam(value="password") String password) {
        UserConnection userConnection = new UserConnection();
        return userConnection.getUser(username, password);
    }

    @RequestMapping("/user/login/all")
    @Getter
    public List<User> getAllUsers() {
        UserConnection userConnection = new UserConnection();
        return userConnection.getUsers();
    }
}
