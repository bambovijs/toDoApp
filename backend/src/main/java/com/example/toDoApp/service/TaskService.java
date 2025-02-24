package com.example.toDoApp.service;

import com.example.toDoApp.dto.TaskDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
    TaskDto createTask(TaskDto taskDto);

    List<TaskDto> getAllTasks();

    TaskDto updateTask(Long id, TaskDto taskDto);

    void deleteTask(Long taskId);
}
