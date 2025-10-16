import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadMagnetPageComponent } from './lead-magnet-page.component';

describe('LeadMagnetPageComponent', () => {
  let component: LeadMagnetPageComponent;
  let fixture: ComponentFixture<LeadMagnetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadMagnetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadMagnetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
