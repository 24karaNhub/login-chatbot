package com.per.loginchatbot.service;

import com.per.loginchatbot.model.User;
import com.per.loginchatbot.repositiory.UserReop;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserService {
    private final UserReop userReop;

    public UserService(UserReop userReop) {
        this.userReop = userReop;

    }
    public boolean auth(String email,String password){
        User user = userReop.findByEmail(email);
        if(user!=null && user.getPassword().equals(password)){
            return true;
        }else {
            return false;
        }
    }
    public void createUser(User user){
        userReop.save(user);
    }

}
