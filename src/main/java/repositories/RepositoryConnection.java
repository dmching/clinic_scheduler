package src.main.java.repositories;

public interface RepositoryConnection {
    public Object select();
    public boolean update();
    public boolean insert();
    public boolean delete();
}
