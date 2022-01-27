package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByUserEmail(String email);
}
