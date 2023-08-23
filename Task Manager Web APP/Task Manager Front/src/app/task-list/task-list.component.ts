import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router'; // Import the Router
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks!: any[]; // Specify the type here

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe((data: any) => {
      console.log('Loaded tasks:', data); // Add this line for debugging
      this.tasks = data; // Assuming the API response is an array of tasks
    });
  }

  viewTask(taskId: number) {
    console.log('View task with ID:', taskId); // Add this line for debugging
    // Implement the navigation to task details component
    this.router.navigate(['/tasks', taskId]);
  }

  create() {
    this.router.navigate(['/tasks/create']);
  }

  deleteTask(taskId: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        // Update the tasks list after successful deletion
        this.loadTasks();
      });
    }
  }

  updateTaskStatus(task: any) {
    this.taskService.updateTask(task).subscribe(() => {
      console.log('Task status updated:', task);
    });
  }
  
  
  reorderTasks(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    // Update the order of tasks in the backend (send requests if necessary)
  }


}
