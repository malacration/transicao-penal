import { Injectable } from '@angular/core';
import { Router, CanActivate,
  ActivatedRouteSnapshot } from '@angular/router';
  import { Subject } from 'rxjs/Subject';
@Injectable()
export class AuthService implements CanActivate {
newchange = new Subject<boolean>();
messageAuth = new Subject<string>();
  constructor(private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true
  }

   nonAuthRedirect(messagedata){
    
   }

}
