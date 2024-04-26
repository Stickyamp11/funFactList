import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, filter, map } from "rxjs";
import { AuthService } from "./shared/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }
  authService = inject(AuthService);
  router = inject(Router);
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkUserAuthentication(); 
  }

  private checkUserAuthentication(): Observable<boolean> {
    return this.authService.user$.pipe(
      filter(user => user != null),
      map((user) => {
        if(user){
          return true;
        }
        else{
          this.authService.currentUserSig.set(null);
          this.router.navigateByUrl('/');
          return false;
        }
      }));
  }
}