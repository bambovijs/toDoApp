package com.example.toDoApp.service.impl;

import com.example.toDoApp.dto.TaskDto;
import com.example.toDoApp.entity.Task;
import com.example.toDoApp.mapper.TaskMapper;
import com.example.toDoApp.repository.TaskRepository;
import com.example.toDoApp.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask = taskRepository.save(task);

        return TaskMapper.mapToTaskDto(savedTask);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().map(TaskMapper::mapToTaskDto).collect(Collectors.toList());
    }

    @Override
    public TaskDto updateTask(Long id, TaskDto taskDto) {
       Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

       task.setTitle(taskDto.getTitle());
       task.setDescription(taskDto.getDescription());
       task.setStatus(taskDto.getStatus());

       Task updatedTask = taskRepository.save(task);
       return TaskMapper.mapToTaskDto(updatedTask);
    }

    @Override
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
