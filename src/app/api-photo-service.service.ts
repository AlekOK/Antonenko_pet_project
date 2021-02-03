import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiPhotoServiceService {

  userName: string = "";
  response: any ;
  url: string = "https://api.unsplash.com/search/";
  // client_id: string = "qY6VPvzNIu-e33TztnlAcPlrnjSE2IWF4460THhtmVM";

  constructor(private http: HttpClient, private spinnerService: NgxSpinnerService) { }

  searchCollection() {
    this.http.get( this.url + 'collections?&query=' + this.userName).subscribe( res => {
      
      this.spinnerService.show()
      this.response = res;
      setTimeout(()=> {
        this.spinnerService.hide()
      }, 200);
      this.userName = "";
    })
    
  }
}
