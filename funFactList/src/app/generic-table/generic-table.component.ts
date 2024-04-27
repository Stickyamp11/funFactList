import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent<T> implements OnInit {
  @Input('objects') objects: Array<T> = [];
  @Input('columns') columns: Array<keyof T> = [];

  ngOnInit(): void {
    
  }

}
