import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  constructor(public tasksService: TasksService) { }

  newTaskName = '';

  ngOnInit(): void { 
    this.tasksService.getAll();
  }

  async addTask() { 
    await this.tasksService.create(this.newTaskName);
    await this.tasksService.getAll();
  }

   deleteTask(id: number) { 
    this.tasksService.remove(id) 
  }

}

