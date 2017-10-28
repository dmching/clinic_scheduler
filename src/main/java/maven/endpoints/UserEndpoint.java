package maven.endpoints;

import maven.objects.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import maven.repositories.UserConnection;

import java.util.List;

@CrossOrigin
@RestController
public class UserEndpoint {

    @RequestMapping("/user/login")
    public ResponseEntity<User> getUser(
            @RequestHeader(value="username") String username,
            @RequestHeader(value="password") String password) {
        System.out.println(username);
        System.out.println(password);
        UserConnection userConnection = new UserConnection();
        return new ResponseEntity<User>(userConnection.getUser(username, password), HttpStatus.OK);
    }

    @RequestMapping("/user/login/all")
    public ResponseEntity<List<User>> getAllUsers() {
        UserConnection userConnection = new UserConnection();
        return new ResponseEntity<List<User>>(userConnection.getUsers(), HttpStatus.OK);
    }
}
