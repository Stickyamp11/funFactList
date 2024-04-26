import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactListComponentComponent } from './fact-list-component.component';

describe('FactListComponentComponent', () => {
  let component: FactListComponentComponent;
  let fixture: ComponentFixture<FactListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
