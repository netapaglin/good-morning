import { Component, Input, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  private subscription: Subscription;
  @Input() dadLine: any;

  private defaultDadLine:any = 'Jan 29 2032 06:35:00'


  public dateNow = new Date();
  public dDay = new Date();

  ngOnChanges(changes:any) {
    this.dDay = new Date(this.dadLine)
    this.dDay.setFullYear(2033)
    console.log(this.dadLine)
  }

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference () {

      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
    this.dDay = new Date(this.defaultDadLine)
  }

}
