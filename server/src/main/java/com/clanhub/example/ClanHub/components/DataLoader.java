package com.clanhub.example.ClanHub.components;

import com.clanhub.example.ClanHub.models.CategoryType;
import com.clanhub.example.ClanHub.models.Comment;
import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import com.clanhub.example.ClanHub.repositories.CommentRepositoy;
import com.clanhub.example.ClanHub.repositories.PostRepository;
import com.clanhub.example.ClanHub.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentRepositoy commentRepositoy;


    @Override
    public void run(ApplicationArguments args) throws Exception{
        User user1 = new User("Tony", "Jones", "a person","t@j.com", "TJ", "TJZ");
        userRepository.save(user1);

        User user2 = new User("Barbara", "Evans", "a person","b@e.com", "BE", "BEQ");
        userRepository.save(user2);

        User user3 = new User("Mick", "Arthur", "a person","M@A.com", "MA", "MAX");
        userRepository.save(user3);

        User user4 = new User("Sam", "Adams", "a person","sam@gmail.com", "IG", "IGA");
        userRepository.save(user4);

        Post post1 = new Post(CategoryType.FEATURE, "how to use Git", "jdksfvbkjasdbfkjsd", 0, user4);
        postRepository.save(post1);

        Post post2 = new Post(CategoryType.FEATURE, "vs code shortcuts", "kdafjkdskdbfk", 0, user4);
        postRepository.save(post2);

        Post post3 = new Post(CategoryType.TIPSANDTRICKS, "terminal wizardry", "dajsbkjfjkbfdgkj", 0, user4);
        postRepository.save(post3);

        Post post4 = new Post(CategoryType.NETWORKING, "how to not be fired", "jkVSVUIVr", 0, user2);
        postRepository.save(post4);

        Post post5 = new Post(CategoryType.NETWORKING, "need friends", "fdklsngldfnlngiore", 0, user3);
        postRepository.save(post5);

        Comment comment1 = new Comment("test comment", "this is the body of a test comment", 0, user4, post1);
        commentRepositoy.save(comment1);

        Comment comment2 = new Comment("test comment another", "another description for you", 0, user4, post1);
        commentRepositoy.save(comment2);

        Comment comment3 = new Comment("test comment yet another", "how about this one as well", 0, user1, post2);
        commentRepositoy.save(comment3);

        Comment comment4 = new Comment("test comment final", "finally we are going to inspect this one as well", 0, user1, post2);
        commentRepositoy.save(comment4);

        user4.addPost(post1);
        user4.addPost(post2);
        user4.addPost(post3);
        user2.addPost(post4);
        user3.addPost(post5);





    }

}
