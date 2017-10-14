package src.main.java.repositories;

public class UserConnection implements RepositoryConnection{
    @Override
    public Object select() {
        return null;
    }

    @Override
    public boolean update() {
        return false;
    }

    @Override
    public boolean insert() {
        return false;
    }

    @Override
    public boolean delete() {
        return false;
    }
}
