package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
