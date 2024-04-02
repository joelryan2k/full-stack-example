import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { removeData } from 'jquery';

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

  ngOnInit(): void { //Not 100% sure what this function definition here is for. I believe that it has to do with the "OnInit" in the 
    //class definition
    this.tasksService.getAll();
  }

  async addTask() { 
    await this.tasksService.create(this.newTaskName);
    await this.tasksService.getAll();
  }

   deleteTask(id: number) { 
    console.log("Function does something")
    this.tasksService.remove(id) 
  }

}

