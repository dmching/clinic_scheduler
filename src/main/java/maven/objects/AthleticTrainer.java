package maven.objects;

public class AthleticTrainer {
    private int id;
    private User user;
    private String classification;

    public AthleticTrainer() {
        this.id = -1;
        this.user = new User();
        this.classification = "";
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

    public void setClassification(String classification) {
        this.classification = classification;
    }
}
