package com.clanhub.example.ClanHub.components;

import com.clanhub.example.ClanHub.models.CategoryType;
import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
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

        Post post1 = new Post(CategoryType.FEATURE, "how to use Git", "jdksfvbkjasdbfkjsd", user1);

        Post post2 = new Post(CategoryType.FEATURE, "vs code shortcuts", "kdafjkdskdbfk", user1);
        Post post3 = new Post(CategoryType.TIPSANDTRICKS, "terminal wizardry", "dajsbkjfjkbfdgkj", user1);
        Post post4 = new Post(CategoryType.NETWORKING, "how to not be fired", "jkVSVUIVr", user2);
        Post post5 = new Post(CategoryType.NETWORKING, "need friends", "fdklsngldfnlngiore", user3);

        postRepository.save(post1);
        postRepository.save(post2);
        postRepository.save(post3);
        postRepository.save(post4);
        postRepository.save(post5);
    }

}
