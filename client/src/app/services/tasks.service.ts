import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, take } from "rxjs";

@Injectable({ providedIn: 'root'})
export class TasksService {
  tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  async getAll() {
    this.tasks = await firstValueFrom(this.http.get<Task[]>('/api/tasks/').pipe(take(1)));
  }

  create(name: string) {
    return firstValueFrom(this.http.post<void>('/api/tasks/', { name }).pipe(take(1)));
  }
}
