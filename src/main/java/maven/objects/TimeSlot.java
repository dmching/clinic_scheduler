package maven.objects;

public class TimeSlot {
    private int id;
    private double startTime;
    private double endTime;

    public TimeSlot() {
        this.id = -1;
        this.startTime = -1;
        this.endTime = -1;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getStartTime() {
        return startTime;
    }

    public void setStartTime(double startTime) {
        this.startTime = startTime;
    }

    public double getEndTime() {
        return endTime;
    }

    public void setEndTime(double endTime) {
        this.endTime = endTime;
    }
}
