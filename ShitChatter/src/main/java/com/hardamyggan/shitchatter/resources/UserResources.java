/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hardamyggan.shitchatter.resources;

import com.hardamyggan.shitchatter.model.User;
import com.hardamyggan.shitchatter.service.UserService;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Victor
 */
@Path("users")
public class UserResources {
    
    UserService userService = new UserService();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
    
    @GET
    @Path("{userId}")
    public User getUser(@PathParam("userId") long userId) {        
        return userService.getUser(userId);
    }    
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User addUser(User user) {
        return userService.addUser(user);
    }
    
    @DELETE
    @Path("{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteUser(@PathParam("userId") long userId) {
        userService.removeUser(userId);
    }
    
}
