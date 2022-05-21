import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimePickerComponent } from './time-picker/time-picker.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public time: string;
  public timerId: number;
  public dadLine:string = 'Wed May 25 2033 7:35:00 GMT+0300'

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.timerId = window.setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
  }, 1000);
  }


  receiveMessage($event) {
    this.dadLine = $event
    console.log(this.dadLine)
  }

  editDadline(){
    const dialogRef = this.dialog.open(TimePickerComponent, { panelClass: 'custom-dialog-container' });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
