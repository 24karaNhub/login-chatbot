package com.per.loginchatbot.controller;
import com.per.loginchatbot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

import com.per.loginchatbot.model.User;
import com.per.loginchatbot.repositiory.UserReop;

//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class logincontroller {
    private final UserService userService;

    public logincontroller(UserService userService) {
        this.userService = userService;

    }
    

    
    @GetMapping("/login")
    public String loginPage(){
        return "login";
    }
    
    
    
    @PostMapping("/login")
    public String login(@RequestParam String email , @RequestParam String password,Model model){
        boolean isauth= userService.auth(email,password);
        if(isauth){
            model.addAttribute("username",email);
            return "chat";
        }else{
            model.addAttribute("errorMessage","Incorrect username or password");
            return "login";
        }

    }
}
