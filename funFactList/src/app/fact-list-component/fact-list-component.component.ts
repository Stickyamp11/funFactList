import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { FactService } from '../shared/fact.service';
import { FunFactInterface } from '../shared/interfaces';

@Component({
  selector: 'app-fact-list-component',
  standalone: true,
  imports: [CommonModule, GenericTableComponent],
  templateUrl: './fact-list-component.component.html',
  styleUrl: './fact-list-component.component.scss'
})
export class FactListComponentComponent {
   columnNames: FunFactInterface = {
    creationDate: '',
    textContent: ''
  };
  tableColumns = Object.keys(this.columnNames) as (keyof FunFactInterface)[]
  authService = inject(AuthService);
  factService = inject(FactService);
  currentUserSig = this.authService.currentUserSig;
  userFactsSig = this.factService.factsSig;
}
