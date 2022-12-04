import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from 'src/app/service/config.service';
import { ControlPannelComponent } from './control-pannel/control-pannel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name:string;

  constructor(public dialog: MatDialog, private config:ConfigService) { }

  ngOnInit(): void {
    this.config.currentChildName.subscribe(message => (this.name= message))
  }

  public openControl(){
     this.dialog.open(ControlPannelComponent, { panelClass: 'custom-dialog-container' });
  }

}
