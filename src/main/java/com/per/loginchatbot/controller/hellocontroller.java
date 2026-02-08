package com.per.loginchatbot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hellocontroller {

    @GetMapping("/home")
    public String home() {
        return "Spring Boot is working!";
    }
}