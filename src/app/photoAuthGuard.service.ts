
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoAuthGuardService implements CanActivate{
  
  auth: boolean = true;
  
    constructor(private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         
        if(this.auth) {
            return true;
           
        } else {

            alert("You need autherizate!")
            this.router.navigate(['/login']);
            return false; 
            
        }
    }
  
}
