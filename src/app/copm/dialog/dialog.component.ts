import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfigService } from 'src/app/service/config.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  public success: string
  public video: string
  public song: SafeResourceUrl



  constructor(private config: ConfigService, private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.video = 'https://www.youtube.com/embed/QB8NuvDML2I'
    this.song = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.replace("youtu.be", "www.youtube.com/embed"))
    this.config.currentDoneMessage.subscribe(message => (this.success = message))
    this.config.currentSong.subscribe(message => (this.video = message))
    this.song = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.replace("youtu.be", "www.youtube.com/embed"))
  }



}

