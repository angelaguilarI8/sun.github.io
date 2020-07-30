import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    if (localStorage.getItem('SCtoken') ){
      return true;
    }
    else{
      this.router.navigate(['/aviso-de-privavidad'])
      return false;
    }
  }
}
