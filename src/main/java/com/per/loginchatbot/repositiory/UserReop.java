package com.per.loginchatbot.repositiory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.per.loginchatbot.model.User;
import java.util.List;


public interface UserReop extends JpaRepository<User, Integer> {
    User findByEmail(String email);
    
}
