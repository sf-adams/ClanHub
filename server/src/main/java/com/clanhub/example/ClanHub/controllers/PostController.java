package com.clanhub.example.ClanHub.controllers;

import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import com.clanhub.example.ClanHub.repositories.PostRepository;
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
public class PostController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        List<Post> foundPosts = postRepository.findAll();
        return new ResponseEntity<>(foundPosts, HttpStatus.OK);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity getPostsById(@PathVariable Long id){
        Optional<Post> foundPost = postRepository.findById(id);
        return new ResponseEntity(foundPost, HttpStatus.OK);
    }

    @PostMapping("/posts")
    public ResponseEntity savePost(@RequestBody Post post) throws Exception{
        postRepository.save(post);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> savePost(@PathVariable("id") long id, @RequestBody Post post){
        Optional<Post> postData = postRepository.findById(id);
        return new ResponseEntity<>(postRepository.save(post), HttpStatus.OK);
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<HttpStatus> deletePost(@PathVariable("id") long id) {
        try {
            postRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
