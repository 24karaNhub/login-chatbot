package com.per.loginchatbot;
import jakarta.persistence.*;
@Entity
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private String sender;
    public ChatMessage(){

    }
    public ChatMessage(String content,String sender){
        this.content=content;
        this.sender=sender;

    }
    public long getID(){
        return id;

    }
    public String getContent(){
        return content;
    }
    public  String getSender(){
        return sender;
    }



}