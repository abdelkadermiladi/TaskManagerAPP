package com.example.tasklistapp.Repo;


import com.example.tasklistapp.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}