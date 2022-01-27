package com.clanhub.example.ClanHub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name= "category")
//    private String category;

    @Column(name="category")
    CategoryType categoryType;

    @Column(name= "title")
    private String title;

    @Column(name= "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user")
    @JsonIgnoreProperties({"post"})
    private User user;

    public Post(CategoryType categoryType, String title, String description, User user) {
        this.categoryType = categoryType;
        this.title = title;
        this.description = description;
        this.user = user;
    }

    public Post() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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
}
