/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hardamyggan.shitchatter.model;

/**
 *
 * @author Victor
 */
public class User {
    
    private long id;
    private String name;
    private String password;
    
    
    public User() {
        
    }

    public User(long id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }    
    
}
