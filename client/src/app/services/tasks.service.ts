import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { HttpClient } from "@angular/common/http";
import { first, firstValueFrom, take } from "rxjs";
import { TasksComponent } from "../tasks/tasks.component";

@Injectable({ providedIn: 'root'})
export class TasksService {
  tasks: Task[] = [];

  constructor(private http: HttpClient) {}
  
  async getAll() { // This function gets all the tasks from the server 
    this.tasks = await firstValueFrom(this.http.get<Task[]>('/api/tasks/').pipe(take(1)));
  }

  create(name: string) { // This function creates the new task
    return firstValueFrom(this.http.post<void>('/api/tasks/', { name }).pipe(take(1)));
  }

  async remove(id: number) { //This task deletes a task at a specific id
    await firstValueFrom(this.http.delete<void>(`/api/tasks/${ id }`, ))
    await this.tasks.pop(); //deletes the task completely
    
  }

}

/* 
String interpolation to get the specific id 
*/