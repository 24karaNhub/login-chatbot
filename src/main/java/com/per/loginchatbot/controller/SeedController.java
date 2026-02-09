package com.per.loginchatbot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.per.loginchatbot.model.User;
import com.per.loginchatbot.repositiory.UserReop;

@RestController
public class SeedController {

    private final UserReop userRepo;

    public SeedController(UserReop userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/seed")
    public String seedUser() {
        User user = new User("test@gmail.com", "123456");
        userRepo.save(user);
        return "User created successfully";
    }
}