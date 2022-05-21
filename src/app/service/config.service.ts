import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  public editChildName: any = [];
  private childNameSource = new BehaviorSubject(this.editChildName);
  currentChildName = this.childNameSource.asObservable();
  changeChildName(message: string) {
    this.childNameSource.next(message)
  }

  public editDoneMessage: any = [];
  private doneMessageSource = new BehaviorSubject(this.editDoneMessage);
  currentDoneMessage = this.doneMessageSource.asObservable();
  changeDoneMessage(message: string) {
    this.doneMessageSource.next(message)
  }

  public editSong: any = [];
  private songSource = new BehaviorSubject(this.editSong);
  currentSong = this.songSource.asObservable();
  changeSong(message: string) {
    this.songSource.next(message)
  }




}
