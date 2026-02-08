package com.per.loginchatbot.controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.per.loginchatbot.ChatService;


//import org.springframework.web.bind.annotation.RequestBody;
@RestController
public class ChatBotController {

    private final ChatService chatService;

public ChatBotController(ChatService chatService) {
    this.chatService = chatService;
}
    
    @PostMapping("/chat")
    public String chat(@RequestParam  String message){
        
       
        
        
        
        
        return chatService.generateResponse(message);

    }
}