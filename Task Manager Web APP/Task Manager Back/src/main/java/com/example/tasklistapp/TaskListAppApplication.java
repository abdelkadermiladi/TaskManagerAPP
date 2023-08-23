package com.example.tasklistapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class TaskListAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskListAppApplication.class, args);
    }
}