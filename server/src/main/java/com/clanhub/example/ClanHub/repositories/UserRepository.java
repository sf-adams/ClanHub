package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByPosts(List<Post> posts);
}