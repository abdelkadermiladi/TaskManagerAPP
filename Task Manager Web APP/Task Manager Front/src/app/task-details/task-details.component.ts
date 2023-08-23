import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService,
    private router: Router) { }

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

  editTask(taskId: number) {
    this.router.navigate(['/tasks', taskId, 'edit']);

  }
  navigateToTasks() {
    this.router.navigate(['/tasks']); // Navigate back to the tasks page
  }
}
