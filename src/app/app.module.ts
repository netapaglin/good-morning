import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './copm/header/header.component';
import { MainComponent } from './copm/main/main.component';
import { TaskComponent } from './copm/task/task.component';
import { FooterComponent } from './copm/footer/footer.component';
import { AddComponent } from './copm/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './copm/dialog/dialog.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CountDownComponent } from './copm/footer/count-down/count-down.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatTimepickerModule } from 'mat-timepicker';
import { ControlPannelComponent } from './copm/header/control-pannel/control-pannel.component';
import { TimePickerComponent } from './copm/footer/time-picker/time-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TaskComponent,
    FooterComponent,
    AddComponent,
    DialogComponent,
    CountDownComponent,
    TimePickerComponent,
    ControlPannelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    YouTubePlayerModule,
    NgxMatTimepickerModule,
    BrowserAnimationsModule,
    MatTimepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
