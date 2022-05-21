import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Task } from 'src/app/model/task.model';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input()
  appearance: MatFormFieldAppearance

  public task:Task
  public form:FormGroup;

  // options: FormGroup;
  // fontSizeControl: any;
  // colorControl = new FormControl('blue');


  constructor(
    public _data:GeneralService,

  ) {

   }

  ngOnInit(): void {
    try {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required]  )
      });}
      catch (err: any) {
        console.log(err);
    }
  }

 add(){
  const input = this.form.value;
   console.log(input)
   this._data.addTask(input.name)
   this.form.reset();
 }



}
