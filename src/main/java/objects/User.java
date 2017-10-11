package src.main.java.objects;

public class User {
    private int userId;
    private String username;
    private String password;

    public User() {
        this.userId = -1;
        this.username = "";
        this.password = "";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getUserId() {

        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}