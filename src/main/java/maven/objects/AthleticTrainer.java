package maven.objects;

public class AthleticTrainer {
    private int id;
    private User user;
    private String classification;
    private String primarySport;

    public AthleticTrainer() {
        this.id = -1;
        this.user = new User();
        this.classification = "";
        this.primarySport = "";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) { this.classification = classification; }

    public String getPrimarySport() { return primarySport; }

    public void setPrimarySport(String primarySport) { this.primarySport = primarySport; }

    @Override
    public String toString() {
        return "AthleticTrainer{" +
                "id=" + id +
                ", user=" + user +
                ", classification='" + classification + '\'' +
                ", primarySport='" + primarySport + '\'' +
                '}';
    }
}
