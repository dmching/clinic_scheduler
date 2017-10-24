package maven.endpoints;

import maven.objects.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import maven.repositories.UserConnection;

import java.util.List;

@RestController
public class UserEndpoint {

    @RequestMapping("/user/login")
    public User getUser(@RequestHeader(value="username") String username,
                        @RequestHeader(value="password") String password) {
        UserConnection userConnection = new UserConnection();
        return userConnection.getUser(username, password);
    }

    @CrossOrigin
    @RequestMapping("/user/login/all")
    public ResponseEntity<List<User>> getAllUsers() {
        UserConnection userConnection = new UserConnection();
        return new ResponseEntity<List<User>>(userConnection.getUsers(), HttpStatus.OK);
    }
}
