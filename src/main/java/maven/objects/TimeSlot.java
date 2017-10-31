package maven.objects;

public class TimeSlot {
    private int id;
    private String startTime;
    private String endTime;

    public TimeSlot() {
        this.id = -1;
        this.startTime = "";
        this.endTime = "";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
