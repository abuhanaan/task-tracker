import { Injectable } from '@angular/core';
import { Task } from 'src/Task';
import { TASKS } from 'src/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Task[] {
    return TASKS
  }
}
