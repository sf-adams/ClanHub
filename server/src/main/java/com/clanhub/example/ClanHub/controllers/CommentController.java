package com.clanhub.example.ClanHub.controllers;

import com.clanhub.example.ClanHub.models.Comment;
import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.repositories.CommentRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public class CommentController {

    @Autowired
    CommentRepositoy commentRepositoy;

    @GetMapping("/comments")
    public ResponseEntity<List<Comment>> getAllComments(){
        List<Comment> foundPosts = commentRepositoy.findAll();
        return new ResponseEntity<>(foundPosts, HttpStatus.OK);
    }
}
