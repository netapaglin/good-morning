import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/model/task.model';
import { GeneralService } from 'src/app/service/general.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    public _data:GeneralService,
    public dialog: MatDialog
  ) { }

  @Input()
  task:Task

  openDialog() {
    this.dialog.open(DialogComponent, { panelClass: 'custom-dialog-container' });
  }

  ngOnInit(): void {
  }

  del(task){
    this._data.deleteTask(task)
    if(this._data.TasksArr.length == 0){
      this.openDialog()
    }
  }


}

