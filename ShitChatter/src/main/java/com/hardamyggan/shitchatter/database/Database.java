/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hardamyggan.shitchatter.database;

import com.hardamyggan.shitchatter.model.User;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Victor
 */
public class Database {
    
    private static Map<Long, User> users = new HashMap<>();
    
    public static Map<Long, User> getUsers() {
        return users;
    }
}
