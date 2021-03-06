package com.clanhub.example.ClanHub.controllers;
import com.clanhub.example.ClanHub.models.User;
import com.clanhub.example.ClanHub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/users")
    public ResponseEntity saveUser(@RequestBody User user) throws Exception{
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> saveUser(@PathVariable("id") long id, @RequestBody User user){
        Optional<User> userData = userRepository.findById(id);
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
