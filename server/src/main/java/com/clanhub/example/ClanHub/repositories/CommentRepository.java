package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
