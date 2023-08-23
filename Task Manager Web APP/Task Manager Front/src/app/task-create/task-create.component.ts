import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task: any = {

  };

  constructor(private taskService: TaskService,
              private router: Router) { }

  createTask() {
    this.task.created_at = new Date(); // Set created_at timestamp as a Date object
    this.task.updated_at = new Date(); // Set updated_at timestamp as a Date object
  
    this.task.dueDate = new Date(this.task.dueDate);
    
    this.taskService.createTask(this.task).subscribe(
      () => {
        console.log('task created Successfully !!!');

        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
  }
}
