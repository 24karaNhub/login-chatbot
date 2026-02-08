package com.per.loginchatbot;

import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final ChatMessageRepository chatMessageRepository;
    
    public ChatService(ChatMessageRepository chatMessageRepository){
        this.chatMessageRepository=chatMessageRepository;
    }
    public String generateResponse(String message){
        if (message==null || message.isEmpty()) {
            return "yeah i am waiting ";
        }
        String normalisedString=message.trim().toLowerCase();
        chatMessageRepository.save(new ChatMessage(normalisedString,"USER"));
       
       if (normalisedString.contains("help")) {
           
             String responseString="How can i help sir";
             chatMessageRepository.save(new ChatMessage(responseString, "BOT"));   
             return responseString;
        } else if (normalisedString.contains("hi")) {
           
            String responseString="Hi How are you";
            chatMessageRepository.save(new ChatMessage(responseString, "BOT"));
            return responseString;
        } else {
           String response = "i am having trouble understanding";
            chatMessageRepository.save(new ChatMessage(response, "BOT"));
            return response;
           
        }
    }
    }

