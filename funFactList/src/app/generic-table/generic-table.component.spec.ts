import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableComponent } from './generic-table.component';
import { CommonModule } from '@angular/common';

describe('GenericTableComponent', () => {
  let component: GenericTableComponent<any>;
  let fixture: ComponentFixture<GenericTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableComponent, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
