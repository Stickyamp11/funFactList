import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-fact-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fact-list-component.component.html',
  styleUrl: './fact-list-component.component.scss'
})
export class FactListComponentComponent {
  authService = inject(AuthService);
  currentUserSig = this.authService.currentUserSig;

}
