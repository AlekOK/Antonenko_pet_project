import { Router } from '@angular/router';
import { PhotoAuthGuardService } from './../photoAuthGuard.service';
import { AuthServiseService } from '../auth-servise.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token: string;
  constructor(private fb: FormBuilder, private _auth: AuthServiseService,
    private photo_auth: PhotoAuthGuardService, private router: Router) { }

  ngOnInit(): void { 
    
    this.loginForm = this.fb.group({
      log: ['', [Validators.required, Validators.maxLength(16)]],
      psw: ['', [Validators.required, Validators.minLength(4)]]

    })
  }

  login() {

    const val = this.loginForm.value;

    if (val.log && val.psw) {

      this._auth.login(val.log, val.psw)
        .subscribe(
          (resp) => {
            
            this.photo_auth.auth = true;
            this.router.navigate(['/photos'])
            localStorage.setItem('auth_token', resp.token);
          }, (error) => {alert("Login or password is wrong !")}
        );
    }

  }

}
