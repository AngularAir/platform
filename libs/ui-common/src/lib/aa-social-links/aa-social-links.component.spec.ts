import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AASocialLinksComponent } from './aa-social-links.component';

describe('AASocialLinksComponent', () => {
  let component: AASocialLinksComponent;
  let fixture: ComponentFixture<AASocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AASocialLinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AASocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
