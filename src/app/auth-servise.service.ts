import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServiseService {

  private loginUrl = "http://localhost:3000/auth"
  
  constructor(private http: HttpClient) { }

login(login:string, password:string ) {
    return this.http.post<any>(this.loginUrl, {login, password});
  }
}
