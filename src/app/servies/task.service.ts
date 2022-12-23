import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from 'src/Task';
import { TASKS } from 'src/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
