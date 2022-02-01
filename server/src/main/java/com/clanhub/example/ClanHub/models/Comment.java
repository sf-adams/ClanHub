package com.clanhub.example.ClanHub.models;

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

    @Column(name="time")
    private String time;

    @Column(name="name")
    private String name;

    @Column(name="upvotes")
    private int upvotes;

    @ManyToOne
    @JoinColumn(name="post_id")
    private Post post;

    public Comment(String title, String body, String time, String name, int upvotes, Post post) {
        this.title = title;
        this.body = body;
        this.time = time;
        this.name = name;
        this.upvotes = upvotes;
        this.post = post;
    }

    public Comment() {
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

    public String getTime() {
        return time;
    }

    

    public void setTime(String time) {
        this.time = time;
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
