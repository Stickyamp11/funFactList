import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FactListComponentComponent } from './fact-list-component/fact-list-component.component';
import { AuthService } from './shared/auth.service';
import { RegisterComponent } from './register/register.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FactListComponentComponent, RegisterComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'funFactList';

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      if(user){
        console.log("User is logged. Setting user!");
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!
        })
      }
      else{
        this.authService.currentUserSig.set(null);
      }
      console.log("Current user: ", this.authService.currentUserSig());
    })
  }
}
