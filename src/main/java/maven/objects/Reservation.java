package maven.objects;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class Reservation implements Comparable<Reservation>{
    private int id;
    private Athlete athlete;
    private AthleticTrainer athleticTrainer;
    private TimeSlot timeSlot;
    private String scheduledDate;
    private String complaint;

    private final List<String> DAYS = new ArrayList<>(Arrays.asList("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"));
    private final List<String> MONTHS = new ArrayList<>(Arrays.asList("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"));
    private final int NUM_DATE_PIECES = 4;

    private final int DAY = 0;
    private final int MONTH = 1;
    private final int DATE = 2;
    private final int YEAR = 3;

    public Reservation() {
        this.id = -1;
        this.athlete = new Athlete();
        this.athleticTrainer = new AthleticTrainer();
        this.timeSlot = new TimeSlot();
        Date today = new Date();
        this.scheduledDate = today.toString().substring(0, 11) + today.toString().substring(24);
        this.complaint = "";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Athlete getAthlete() {
        return athlete;
    }

    public void setAthlete(Athlete athlete) {
        this.athlete = athlete;
    }

    public AthleticTrainer getAthleticTrainer() {
        return athleticTrainer;
    }

    public void setAthleticTrainer(AthleticTrainer athleticTrainer) {
        this.athleticTrainer = athleticTrainer;
    }

    public TimeSlot getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(TimeSlot timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(String scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    public String getComplaint() {
        return complaint;
    }

    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }

    @Override
    public int compareTo(Reservation other) {
        String[] otherData = other.scheduledDate.split(" ");
        String[] thisData = this.scheduledDate.split(" ");

        if (Integer.parseInt(thisData[YEAR]) == Integer.parseInt(otherData[YEAR])) {
            if (thisData[MONTH].equals(otherData[MONTH])) {
                if (Integer.parseInt(thisData[DATE]) == Integer.parseInt(otherData[DATE])) {
                    if (this.timeSlot.getEndTime().equals(other.timeSlot.getStartTime())) {
                        return -1;
                    } else if (this.timeSlot.getStartTime().equals(other.timeSlot.getEndTime())) {
                        return 1;
                    } else {
                        // Never should happen because duplicates are guarded against.
                        return 0;
                    }
                } else
                    return Integer.parseInt(thisData[DATE]) - Integer.parseInt(otherData[DATE]);
            } else
                return MONTHS.indexOf(thisData[MONTH]) - MONTHS.indexOf(otherData[MONTH]);
        } else
            return Integer.parseInt(thisData[YEAR]) - Integer.parseInt(otherData[YEAR]);
    }
}
