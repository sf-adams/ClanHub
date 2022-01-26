package com.clanhub.example.ClanHub.controllers;
import com.clanhub.example.ClanHub.models.User;
import com.clanhub.example.ClanHub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> foundUsers = userRepository.findAll();
        return new ResponseEntity<>(foundUsers, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getUsersById(@PathVariable Long id){
        Optional<User> foundUser = userRepository.findById(id);
        return new ResponseEntity(foundUser, HttpStatus.OK);
    }
}