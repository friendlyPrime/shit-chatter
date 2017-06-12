/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hardamyggan.shitchatter.service;

import com.hardamyggan.shitchatter.database.Database;
import com.hardamyggan.shitchatter.model.User;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Victor
 */
public class UserService {
    
    private Map<Long, User> users = Database.getUsers();
    
    public List<User> getAllUsers() {
        return new ArrayList<>(users.values());
    }
    
    public User getUser(long id) {
        return users.get(id);
    }
    
    public User addUser(User user) {
        user.setId(users.size() + 1);
        users.put(user.getId(), user);
        return user;
    }
    
    public User removeUser(long id) {
        return users.remove(id);
    }
    
}
