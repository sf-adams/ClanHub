package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepositoy extends JpaRepository<Comment, Long> {
}
