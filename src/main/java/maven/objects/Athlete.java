package maven.objects;

import java.util.Date;

public class Athlete {
    private int athleteId;
    private String complaint;
    private Date lastVisit;
    private String primarySport;
    private String secondarySport;
    private User user;

    public Athlete() {
        this.athleteId = -1;
        this.complaint = "";
        this.lastVisit = null;
        this.primarySport = "";
        this.secondarySport = "";
        this.user = new User();
    }

    public int getAthleteId() {
        return athleteId;
    }

    public void setAthleteId(int athleteId) {
        this.athleteId = athleteId;
    }

    public String getComplaint() {
        return complaint;
    }

    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }

    public Date getLastVisit() {
        return lastVisit;
    }

    public void setLastVisit(Date lastVisit) {
        this.lastVisit = lastVisit;
    }

    public String getPrimarySport() {
        return primarySport;
    }

    public void setPrimarySport(String primarySport) {
        this.primarySport = primarySport;
    }

    public String getSecondarySport() {
        return secondarySport;
    }

    public void setSecondarySport(String secondarySport) {
        this.secondarySport = secondarySport;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
