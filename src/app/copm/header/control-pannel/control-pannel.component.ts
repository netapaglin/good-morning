import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';



@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css']
})
export class ControlPannelComponent implements OnInit {

  public name: string = ''
  public sentence: string = ''
  public song: string = ''
  public form: FormGroup;

  constructor(private config:ConfigService) { }


  ngOnInit(): void {
    try {
      this.form = new FormGroup({
        childName: new FormControl('', [Validators.minLength(3)]),
        encouragement: new FormControl('', [Validators.minLength(3)]),
        movie: new FormControl('', [Validators.minLength(3)])
      });
     
    }
    catch (err: any) {
      console.log(err);
    }
  }

  nameFormControl = new FormControl('');

  public change() {
    this.config.changeChildName(this.form.value.childName)
    this.config.changeDoneMessage(this.form.value.encouragement)
    this.config.changeSong(this.form.value.movie)
   }

  get childName() { return this.form.get('childName'); }
  get encouragement() { return this.form.get('encouragement'); }
  get movie() { return this.form.get('movie'); }
}
