package com.clanhub.example.ClanHub.controllers;

import com.clanhub.example.ClanHub.models.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("api")
public class CommentController {

//    @Autowired
//    CommentRepository commentRepository;
//
//    @GetMapping("/comments")
//    public ResponseEntity<List<Comment>> getAllPosts(){
//        List<Comment> foundComments = commentRepository.findAll();
//        return new ResponseEntity<>(foundComments, HttpStatus.OK);
//    }
//
//    @GetMapping("/comments/{id}")
//    public ResponseEntity getCommentsById(@PathVariable Long id){
//        Optional<Comment> foundComment = commentRepository.findById(id);
//        return new ResponseEntity(foundComment, HttpStatus.OK);
//    }
//
//    @PostMapping("/comments")
//    public ResponseEntity saveComment(@RequestBody Comment post) throws Exception{
//        commentRepository.save(post);
//        return new ResponseEntity<>(post, HttpStatus.OK);
//    }
//
//    @PutMapping("/comments/{id}")
//    public ResponseEntity<Comment> saveComment(@PathVariable("id") long id, @RequestBody Comment comment){
//        Optional<Comment> postData = commentRepository.findById(id);
//        return new ResponseEntity<>(commentRepository.save(comment), HttpStatus.OK);
//    }
//
//    @DeleteMapping("/comments/{id}")
//    public ResponseEntity<HttpStatus> deleteComment(@PathVariable("id") long id) {
//        try {
//            commentRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
