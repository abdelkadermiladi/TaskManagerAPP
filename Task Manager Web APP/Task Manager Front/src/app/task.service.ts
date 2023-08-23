import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8090/api/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get(`${this.baseUrl}`);
  }

  createTask(task: any) {
    console.log(`${this.baseUrl}`)
    console.log("task = ", task)

    task.created_at = new Date().toISOString(); // Set created_at timestamp
    task.updated_at = new Date().toISOString(); // Set updated_at timestamp

    return this.http.post(`${this.baseUrl}`, task);
  }

  getTaskById(taskId: string) {
    return this.http.get(`${this.baseUrl}/${taskId}`);
  }

  updateTask(task: any) {

    return this.http.put(`${this.baseUrl}/${task.id}`, task);
  }
  

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }
}