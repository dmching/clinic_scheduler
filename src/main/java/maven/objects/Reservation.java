package maven.objects;

public class Reservation {
    private int id;
    private Athlete athlete;
    private AthleticTrainer athleticTrainer;
    private TimeSlot timeSlot;
    private String scheduledDate;

    public Reservation() {
        this.id = -1;
        this.athlete = new Athlete();
        this.athleticTrainer = new AthleticTrainer();
        this.timeSlot = new TimeSlot();
        this.scheduledDate = "";
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
}
