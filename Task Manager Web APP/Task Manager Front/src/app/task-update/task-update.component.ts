import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService , private router: Router) { }

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.loadTaskDetails(taskId);
    } else {
      // Handle case where taskId is null
    }
  }

  loadTaskDetails(taskId: string) {
    this.taskService.getTaskById(taskId).subscribe((data: any) => {
      this.task = data;
    });
  }

  updateTask() {
    this.taskService.updateTask(this.task).subscribe(
      (response: any) => {
        // Handle successful update, e.g., show a success message
        console.log('Task updated successfully!', response);
        this.router.navigate(['/tasks']); // Navigate back to tasks list
      },
      (error: any) => {
        // Handle error, e.g., show an error message
        console.error('Error updating task:', error);
      }
    );
  }


}
