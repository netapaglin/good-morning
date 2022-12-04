import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  public  time: any;
  public message: any
  public defaultTime:boolean = true
  @Output() timeEvent = new EventEmitter<any>();
  constructor() { }

  @Input() dadLine:string;

  ngOnInit(): void {
  };

  defaultValue= {hour: 7, minute: 35, seconds:0};

  timeChangeHandler(event: Event) {
    this.message = event
    this.timeEvent.emit(this.message)
    this.defaultTime = false
  };

}
