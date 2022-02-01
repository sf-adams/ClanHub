package com.clanhub.example.ClanHub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;

    @Column(name="title")
    private String title;

    @Lob
    @Column(name="body")
    private String body;

    @Column(name = "date")
    String date;

    @Column(name="upvotes")
    private int upvotes;

    @ManyToOne
    @JsonIgnoreProperties(value={"comments"}, allowSetters= true)
    @JoinColumn(name="post_id")
    private Post post;

    public Comment(String title, String body, String date, int upvotes, Post post) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.upvotes = upvotes;
        this.post = post;
    }

    public Comment() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(int upvotes) {
        this.upvotes = upvotes;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
