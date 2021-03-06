package maven.endpoints;

import maven.objects.Athlete;
import maven.objects.AthleticTrainer;
import maven.objects.User;
import maven.repositories.ATConnection;
import maven.repositories.AthleteConnection;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import maven.repositories.UserConnection;

import java.util.List;

@CrossOrigin
@RestController
public class UserEndpoint {

    @RequestMapping("/user/login/all")
    public ResponseEntity<List<User>> getAllUsers() {
        UserConnection userConnection = new UserConnection();
        return new ResponseEntity<List<User>>(userConnection.getUsers(), HttpStatus.OK);
    }

    @RequestMapping("/user/login/athlete")
    public ResponseEntity<Athlete> getAthlete(
            @RequestHeader(value="username") String username,
            @RequestHeader(value="password") String password) {
        AthleteConnection athleteConnection = new AthleteConnection();
        Athlete athlete = athleteConnection.getAthlete(username, password);
        if (athlete != null)
            return new ResponseEntity<Athlete>(athleteConnection.getAthlete(username, password), HttpStatus.OK);
        else
            return new ResponseEntity<Athlete>(new Athlete(), HttpStatus.NO_CONTENT);
    }

    @RequestMapping("/user/login/at")
    public ResponseEntity<AthleticTrainer> getAthleticTrainer(
            @RequestHeader(value="username") String username,
            @RequestHeader(value="password") String password) {
        ATConnection athleteConnection = new ATConnection();
        return new ResponseEntity<AthleticTrainer>(athleteConnection.getAthleticTrainer(username, password), HttpStatus.OK);
    }
}
