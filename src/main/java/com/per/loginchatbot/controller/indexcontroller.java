package com.per.loginchatbot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class indexcontroller {
    @GetMapping("/")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
}
