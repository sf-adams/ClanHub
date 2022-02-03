package com.clanhub.example.ClanHub.components;

import com.clanhub.example.ClanHub.models.CategoryType;
import com.clanhub.example.ClanHub.models.Comment;
import com.clanhub.example.ClanHub.models.Post;
import com.clanhub.example.ClanHub.models.User;
import com.clanhub.example.ClanHub.repositories.CommentRepository;
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
    CommentRepository commentRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception{
        User user1 = new User("Tony", "Jones", "a person","t@j.com", "TJ", "TJZ");
        userRepository.save(user1);

        User user2 = new User("Barbara", "Evans", "a person","b@e.com", "BE", "BEQ");
        userRepository.save(user2);

        User user3 = new User("Mick", "Arthur", "a person","M@A.com", "MA", "MAX");
        userRepository.save(user3);

        User user4 = new User("Sam", "Adams", "CodeClan Student From E53","sam@gmail.com", "https://www.linkedin.com/in/sf-adams/", "https://github.com/sf-adams");
        userRepository.save(user4);

        Post post1 = new Post(CategoryType.FEATURE, "how to use Git", "This is a basic walkthrough on how you should use git properly.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id porta nibh. Molestie nunc non blandit massa enim nec dui nunc mattis. Consectetur adipiscing elit duis tristique sollicitudin. Faucibus a pellentesque sit amet.\n" +
                "\n" +
                "Purus sit amet luctus venenatis lectus magna fringilla urna. A erat nam at lectus urna duis convallis convallis. Gravida dictum fusce ut placerat orci nulla pellentesque. Enim sed faucibus turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed. Accumsan lacus vel facilisis volutpat est. Eget nulla facilisi etiam dignissim diam. Orci sagittis eu volutpat odio. Dolor morbi non arcu risus quis varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n" +
                "\n" +
                "Ut tristique et egestas quis. Mauris sit amet massa <br/> vitae tortor condimentum lacinia. Tincidunt ornare massa eget egestas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim enim sit amet venenatis urna cursus eget nunc. Tristique magna sit amet purus gravida quis blandit turpis. Ut morbi tincidunt augue interdum velit. Ipsum suspendisse ultrices gravida dictum fusce. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ultricies lacus sed turpis tincidunt id aliquet risus. In cursus turpis massa tincidunt dui. Eu augue ut lectus arcu. Natoque penatibus et magnis dis parturient. Egestas sed tempus urna et pharetra pharetra.\n" +
                "\n" +
                "In aliquam sem fringilla ut morbi tincidunt augue. Eu mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam. Pretium quam vulputate dignissim suspendisse in est ante in. Id aliquet risus feugiat in ante metus dictum at. Faucibus in ornare quam viverra. Magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac tortor dignissim convallis aenean et tortor at risus viverra. Morbi tincidunt ornare massa eget egestas. Ut tortor pretium viverra suspendisse potenti. Nulla facilisi etiam dignissim diam quis.\n" +
                "\n" +
                "Cras ornare arcu dui vivamus arcu. Urna nunc id cursus metus aliquam eleifend mi. Velit scelerisque in dictum non consectetur a erat nam. Augue mauris augue neque gravida in fermentum. Facilisis mauris sit amet massa vitae tortor condimentum. Orci sagittis eu volutpat odio facilisis mauris. Semper auctor neque vitae tempus. Morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Et sollicitudin ac orci phasellus.", "hello", 0, user4);
        postRepository.save(post1);

        Post post2 = new Post(CategoryType.FEATURE, "vs code shortcuts", "some of the best vs code shortcuts that you can have", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id porta nibh. Molestie nunc non blandit massa enim nec dui nunc mattis. Consectetur adipiscing elit duis tristique sollicitudin. Faucibus a pellentesque sit amet.\n" +
                "\n" +
                "Purus sit amet luctus venenatis lectus magna fringilla urna. A erat nam at lectus urna duis convallis convallis. Gravida dictum fusce ut placerat orci nulla pellentesque. Enim sed faucibus turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed. Accumsan lacus vel facilisis volutpat est. Eget nulla facilisi etiam dignissim diam. Orci sagittis eu volutpat odio. Dolor morbi non arcu risus quis varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n" +
                "\n" +
                "Ut tristique et egestas quis. Mauris sit amet massa vitae tortor condimentum lacinia. Tincidunt ornare massa eget egestas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim enim sit amet venenatis urna cursus eget nunc. Tristique magna sit amet purus gravida quis blandit turpis. Ut morbi tincidunt augue interdum velit. Ipsum suspendisse ultrices gravida dictum fusce. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ultricies lacus sed turpis tincidunt id aliquet risus. In cursus turpis massa tincidunt dui. Eu augue ut lectus arcu. Natoque penatibus et magnis dis parturient. Egestas sed tempus urna et pharetra pharetra.\n" +
                "\n" +
                "In aliquam sem fringilla ut morbi tincidunt augue. Eu mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam. Pretium quam vulputate dignissim suspendisse in est ante in. Id aliquet risus feugiat in ante metus dictum at. Faucibus in ornare quam viverra. Magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac tortor dignissim convallis aenean et tortor at risus viverra. Morbi tincidunt ornare massa eget egestas. Ut tortor pretium viverra suspendisse potenti. Nulla facilisi etiam dignissim diam quis.\n" +
                "\n" +
                "Cras ornare arcu dui vivamus arcu. Urna nunc id cursus metus aliquam eleifend mi. Velit scelerisque in dictum non consectetur a erat nam. Augue mauris augue neque gravida in fermentum. Facilisis mauris sit amet massa vitae tortor condimentum. Orci sagittis eu volutpat odio facilisis mauris. Semper auctor neque vitae tempus. Morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Et sollicitudin ac orci phasellus.", "hello", 0,   user4);
        postRepository.save(post2);

        Post post3 = new Post(CategoryType.TIPSANDTRICKS, "terminal wizardry", "how to become a wizard whilst using the unix terminal, aliases, uncommon commands and bash scripting", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id porta nibh. Molestie nunc non blandit massa enim nec dui nunc mattis. Consectetur adipiscing elit duis tristique sollicitudin. Faucibus a pellentesque sit amet.\n" +
                "\n" +
                "Purus sit amet luctus venenatis lectus magna fringilla urna. A erat nam at lectus urna duis convallis convallis. Gravida dictum fusce ut placerat orci nulla pellentesque. Enim sed faucibus turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed. Accumsan lacus vel facilisis volutpat est. Eget nulla facilisi etiam dignissim diam. Orci sagittis eu volutpat odio. Dolor morbi non arcu risus quis varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n" +
                "\n" +
                "Ut tristique et egestas quis. Mauris sit amet massa vitae tortor condimentum lacinia. Tincidunt ornare massa eget egestas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim enim sit amet venenatis urna cursus eget nunc. Tristique magna sit amet purus gravida quis blandit turpis. Ut morbi tincidunt augue interdum velit. Ipsum suspendisse ultrices gravida dictum fusce. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ultricies lacus sed turpis tincidunt id aliquet risus. In cursus turpis massa tincidunt dui. Eu augue ut lectus arcu. Natoque penatibus et magnis dis parturient. Egestas sed tempus urna et pharetra pharetra.\n" +
                "\n" +
                "In aliquam sem fringilla ut morbi tincidunt augue. Eu mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam. Pretium quam vulputate dignissim suspendisse in est ante in. Id aliquet risus feugiat in ante metus dictum at. Faucibus in ornare quam viverra. Magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac tortor dignissim convallis aenean et tortor at risus viverra. Morbi tincidunt ornare massa eget egestas. Ut tortor pretium viverra suspendisse potenti. Nulla facilisi etiam dignissim diam quis.\n" +
                "\n" +
                "Cras ornare arcu dui vivamus arcu. Urna nunc id cursus metus aliquam eleifend mi. Velit scelerisque in dictum non consectetur a erat nam. Augue mauris augue neque gravida in fermentum. Facilisis mauris sit amet massa vitae tortor condimentum. Orci sagittis eu volutpat odio facilisis mauris. Semper auctor neque vitae tempus. Morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Et sollicitudin ac orci phasellus.", "hello", 0,  user4);
        postRepository.save(post3);

        Post post4 = new Post(CategoryType.NETWORKING, "how to not be fired", "how to succeed in your first employment as a junior software developer.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id porta nibh. Molestie nunc non blandit massa enim nec dui nunc mattis. Consectetur adipiscing elit duis tristique sollicitudin. Faucibus a pellentesque sit amet.\n" +
                "\n" +
                "Purus sit amet luctus venenatis lectus magna fringilla urna. A erat nam at lectus urna duis convallis convallis. Gravida dictum fusce ut placerat orci nulla pellentesque. Enim sed faucibus turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed. Accumsan lacus vel facilisis volutpat est. Eget nulla facilisi etiam dignissim diam. Orci sagittis eu volutpat odio. Dolor morbi non arcu risus quis varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n" +
                "\n" +
                "Ut tristique et egestas quis. Mauris sit amet massa vitae tortor condimentum lacinia. Tincidunt ornare massa eget egestas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim enim sit amet venenatis urna cursus eget nunc. Tristique magna sit amet purus gravida quis blandit turpis. Ut morbi tincidunt augue interdum velit. Ipsum suspendisse ultrices gravida dictum fusce. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ultricies lacus sed turpis tincidunt id aliquet risus. In cursus turpis massa tincidunt dui. Eu augue ut lectus arcu. Natoque penatibus et magnis dis parturient. Egestas sed tempus urna et pharetra pharetra.\n" +
                "\n" +
                "In aliquam sem fringilla ut morbi tincidunt augue. Eu mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam. Pretium quam vulputate dignissim suspendisse in est ante in. Id aliquet risus feugiat in ante metus dictum at. Faucibus in ornare quam viverra. Magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac tortor dignissim convallis aenean et tortor at risus viverra. Morbi tincidunt ornare massa eget egestas. Ut tortor pretium viverra suspendisse potenti. Nulla facilisi etiam dignissim diam quis.\n" +
                "\n" +
                "Cras ornare arcu dui vivamus arcu. Urna nunc id cursus metus aliquam eleifend mi. Velit scelerisque in dictum non consectetur a erat nam. Augue mauris augue neque gravida in fermentum. Facilisis mauris sit amet massa vitae tortor condimentum. Orci sagittis eu volutpat odio facilisis mauris. Semper auctor neque vitae tempus. Morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Et sollicitudin ac orci phasellus.", "hello", 0 , user2);
        postRepository.save(post4);

        Post post5 = new Post(CategoryType.NETWORKING, "Dealing with imposter syndrome", "how to believe in yourself and your potential in your new work", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tempus iaculis urna id volutpat lacus laoreet non. Vehicula ipsum a arcu cursus. Aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at urna condimentum. Suspendisse interdum consectetur libero id faucibus. Aliquam sem et tortor consequat id porta nibh. Molestie nunc non blandit massa enim nec dui nunc mattis. Consectetur adipiscing elit duis tristique sollicitudin. Faucibus a pellentesque sit amet.\n" +
                "\n" +
                "Purus sit amet luctus venenatis lectus magna fringilla urna. A erat nam at lectus urna duis convallis convallis. Gravida dictum fusce ut placerat orci nulla pellentesque. Enim sed faucibus turpis in eu mi bibendum neque. Pellentesque diam volutpat commodo sed. Accumsan lacus vel facilisis volutpat est. Eget nulla facilisi etiam dignissim diam. Orci sagittis eu volutpat odio. Dolor morbi non arcu risus quis varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n" +
                "\n" +
                "Ut tristique et egestas quis. Mauris sit amet massa vitae tortor condimentum lacinia. Tincidunt ornare massa eget egestas. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dignissim enim sit amet venenatis urna cursus eget nunc. Tristique magna sit amet purus gravida quis blandit turpis. Ut morbi tincidunt augue interdum velit. Ipsum suspendisse ultrices gravida dictum fusce. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Ultricies lacus sed turpis tincidunt id aliquet risus. In cursus turpis massa tincidunt dui. Eu augue ut lectus arcu. Natoque penatibus et magnis dis parturient. Egestas sed tempus urna et pharetra pharetra.\n" +
                "\n" +
                "In aliquam sem fringilla ut morbi tincidunt augue. Eu mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam. Pretium quam vulputate dignissim suspendisse in est ante in. Id aliquet risus feugiat in ante metus dictum at. Faucibus in ornare quam viverra. Magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ac tortor dignissim convallis aenean et tortor at risus viverra. Morbi tincidunt ornare massa eget egestas. Ut tortor pretium viverra suspendisse potenti. Nulla facilisi etiam dignissim diam quis.\n" +
                "\n" +
                "Cras ornare arcu dui vivamus arcu. Urna nunc id cursus metus aliquam eleifend mi. Velit scelerisque in dictum non consectetur a erat nam. Augue mauris augue neque gravida in fermentum. Facilisis mauris sit amet massa vitae tortor condimentum. Orci sagittis eu volutpat odio facilisis mauris. Semper auctor neque vitae tempus. Morbi tristique senectus et netus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Et sollicitudin ac orci phasellus.", "hello", 0,  user3);
        postRepository.save(post5);

        Comment comment1 = new Comment( "dbjdasb", "test", "hello world", 0, post1);
        commentRepository.save(comment1);

    }

}
