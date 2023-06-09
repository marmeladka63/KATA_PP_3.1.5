package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User findUserById(Long id);

    void saveUser(User use);

    void delete(Long id);

    void update(User user);

    User getUserByUsername(String username);

}
