import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiPhotoServiceService } from '../api-photo-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  data: any = this.response;
  
  constructor(private spinnerService: NgxSpinnerService, private response:  ApiPhotoServiceService ) { }

  ngOnInit(): void {

    this.spinner();

  }
  
  spinner(): void {

    this.spinnerService.show();
    setTimeout(()=> {
      this.spinnerService.hide()
    }, 300);
    
  }
}


