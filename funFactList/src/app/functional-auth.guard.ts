import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
    return true;
   authService.user$.subscribe(user =>{
    if(user){
      console.log("User is logged. Setting user!");
      authService.currentUserSig.set({
        email: user.email!,
        username: user.displayName!
      })
      return true;
    }
    else{
      authService.currentUserSig.set(null);
      router.navigateByUrl('/');
      return false;

    }
  })


  //console.log("authService: ", authService.test );
  //if(authService.currentUser?.email){
  //  return true;
  //}
  //router.navigateByUrl('/');
  //return false;
  
};
