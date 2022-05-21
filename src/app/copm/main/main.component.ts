import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public task:Task
  constructor(
    public _data:GeneralService
  ) { }

  ngOnInit(): void {
  }

}
