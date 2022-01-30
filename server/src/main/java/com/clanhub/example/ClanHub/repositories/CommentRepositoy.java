package com.clanhub.example.ClanHub.repositories;

import com.clanhub.example.ClanHub.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepositoy extends JpaRepository<Comment, Long> {
}
