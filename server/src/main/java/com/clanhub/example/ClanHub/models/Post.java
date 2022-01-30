package com.clanhub.example.ClanHub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="categoryType")
    CategoryType categoryType;

    @Column(name= "title")
    private String title;

    @Column(name= "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user")
//    @JsonIgnoreProperties({"posts"})
    private User user;

//    @JsonIgnoreProperties({"post"})
//    @OneToMany(mappedBy = "post")
//    private List<Comment> comments;

    public Post(CategoryType categoryType, String title, String description, User user) {
        this.categoryType = categoryType;
        this.title = title;
        this.description = description;
        this.user = user;
//        this.comments = new ArrayList<>();
    }

    public Post() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public CategoryType getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(CategoryType categoryType) {
        this.categoryType = categoryType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public List<Comment> getComments() {
//        return comments;
//    }
//
//    public void setComments(List<Comment> comments) {
//        this.comments = comments;
//    }
}
