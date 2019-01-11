import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    console.log(next);
    if (this.auth.isAuthenticated()) {
      console.log('Paso por el Guard');
      return true;
    } else {
      console.error('Bloqueado por el Guard');
      return false;
    }
  }
}
