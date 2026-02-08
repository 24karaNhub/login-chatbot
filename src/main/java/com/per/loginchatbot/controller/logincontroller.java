package com.per.loginchatbot.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class logincontroller {
    @GetMapping("/login")
    public String loginPgae(){
        return "login";
    }
    
    
    
    @PostMapping("/login")
   
   public String login(@RequestParam String email , @RequestParam String password,Model model){
    if (email.equals("test@gmail.com") && password.equals("123456")) {
        model.addAttribute("username", "Karan");
        return "chat";
        
    }if (email.equals("karan@gmail.com")&& password.equals("101010")) {
        return "chat";
    }
    model.addAttribute("errorMessage","Invaild email or password " );
    return "login";
   }
    
}
