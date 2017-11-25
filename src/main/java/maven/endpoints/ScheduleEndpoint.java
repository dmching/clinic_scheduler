package maven.endpoints;

import maven.objects.AthleticTrainer;
import maven.objects.Reservation;
import maven.objects.TimeSlot;
import maven.repositories.ATConnection;
import maven.repositories.ReservationConnection;
import maven.repositories.TimeSlotConnection;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
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

    @RequestMapping("schedule/reservation")
    public ResponseEntity<Boolean> postReservation(
        @RequestHeader(value="athleteID") String athleteID,
        @RequestHeader(value="atID") String atID,
        @RequestHeader(value="timeslotID") String timeslotID,
        @RequestHeader(value="scheduleDate") String date,
        @RequestHeader(value="complaint") String complaint
    ) {
        // TODO: Handle if one AT is overloaded.
        ReservationConnection reservationConnection = new ReservationConnection();
        return new ResponseEntity<>(reservationConnection.postReservation(
                Integer.parseInt(athleteID),
                Integer.parseInt(atID),
                Integer.parseInt(timeslotID),
                date, complaint), HttpStatus.OK);
    }

    @RequestMapping("schedule/reservation/athlete")
    public ResponseEntity<List<Reservation>> getAthleteReservations(
        @RequestHeader(value="athleteID") String athleteID
    ) {
        ReservationConnection reservationConnection = new ReservationConnection();
        List<Reservation> reservations = reservationConnection.getReservations(Integer.parseInt(athleteID), true);

        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @RequestMapping("schedule/reservation/at")
    public ResponseEntity<List<Reservation>> getATReservations(
        @RequestHeader(value="atID") String atID
    ) {
        ReservationConnection reservationConnection = new ReservationConnection();
        return new ResponseEntity<List<Reservation>>(reservationConnection.getReservations(Integer.parseInt(atID), false), HttpStatus.OK);
    }

    @RequestMapping("schedule/reservation/delete")
    public ResponseEntity<Boolean> cancelReservation(
        @RequestHeader(value="id") Integer id
    ) {
        ReservationConnection reservationConnection = new ReservationConnection();
        return new ResponseEntity<Boolean>(reservationConnection.cancelReservation(id), HttpStatus.OK);
    }
}
