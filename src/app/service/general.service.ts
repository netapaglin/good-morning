import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public task:Task

 public TasksArr:Task[]=[
   new Task("לצחצח שיניים"),
   new Task("לשטוף פנים"),
   new Task("להתלבש"),
   new Task("להסתרק"),
   new Task("להכניס קופסת אוכל לתיק"),
   new Task("להכניס בקבוק מים לתיק"),
   new Task("לנעול נעליים")
  ]

  constructor() { }

  addTask(name:string){
    this.TasksArr.push(new Task(name))
  }

  deleteTask(value){
    const index: number = this.TasksArr.indexOf(value);
    this.TasksArr.splice(index,1)
  }

}
