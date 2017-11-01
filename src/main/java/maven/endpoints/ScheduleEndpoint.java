package maven.endpoints;

import maven.objects.AthleticTrainer;
import maven.objects.TimeSlot;
import maven.repositories.ATConnection;
import maven.repositories.TimeSlotConnection;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class ScheduleEndpoint {

    @RequestMapping("schedule/times")
    public ResponseEntity<List<TimeSlot>> getTimeSlots() {
        TimeSlotConnection timeSlotConnection = new TimeSlotConnection();
        return new ResponseEntity<List<TimeSlot>>(timeSlotConnection.getTimes(), HttpStatus.OK);
    }

    @RequestMapping("schedule/ats")
    public ResponseEntity<List<AthleticTrainer>> getAllATs() {
        ATConnection atConnection = new ATConnection();
        return new ResponseEntity<List<AthleticTrainer>>(atConnection.getATs(), HttpStatus.OK);
    }
}
