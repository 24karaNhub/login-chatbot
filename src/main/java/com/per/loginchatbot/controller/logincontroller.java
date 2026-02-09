package com.per.loginchatbot.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.per.loginchatbot.model.User;
import com.per.loginchatbot.repositiory.UserReop;

//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class logincontroller {
    
    private UserReop userReop;
    
    public logincontroller(UserReop userReop) {
        this.userReop = userReop;
    }
    
    @GetMapping("/login")
    public String loginPgae(){
        return "login";
    }
    
    
    
    @PostMapping("/login")
   
   public String login(@RequestParam String email , @RequestParam String password,Model model){
    User user=userReop.findByEmail(email);
    if (user!=null && user.getPassword().equals(password)) {
        model.addAttribute("username", user.getEmail());
        return "chat";
    }
    model.addAttribute("errorMessage", "Invalid credential");
        return "login";
    
}
    
}
