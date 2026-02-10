package com.per.loginchatbot.controller;

import com.per.loginchatbot.model.User;
import com.per.loginchatbot.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class signupController {
    private final UserService userService;
    public signupController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/register")
    public String signup(){return "signup";}

    @PostMapping("/signup")
    public String registerUser(@ModelAttribute("user") User user){
        userService.createUser(user);
        return "login";
    }

}
