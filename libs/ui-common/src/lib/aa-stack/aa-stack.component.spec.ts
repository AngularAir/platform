import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAStackComponent } from './aa-stack.component';

describe('AAStackComponent', () => {
  let component: AAStackComponent;
  let fixture: ComponentFixture<AAStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AAStackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
