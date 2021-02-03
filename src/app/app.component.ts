import { Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `<ngx-spinner bdColor="rgba(0, 0, 0, 1)">
              template="<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />" 
              </ngx-spinner>
              <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit {
  title = "hello"
 constructor(private spinnerService: NgxSpinnerService ) {}

 ngOnInit() {
  this.spinner();
 }

spinner(): void {
  this.spinnerService.show();
  setTimeout(()=> {
    this.spinnerService.hide()
  }, 2000);
}

}
