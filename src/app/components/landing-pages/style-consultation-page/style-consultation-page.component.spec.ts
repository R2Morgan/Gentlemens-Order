import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleConsultationPageComponent } from './style-consultation-page.component';

describe('StyleConsultationPageComponent', () => {
  let component: StyleConsultationPageComponent;
  let fixture: ComponentFixture<StyleConsultationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleConsultationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleConsultationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
