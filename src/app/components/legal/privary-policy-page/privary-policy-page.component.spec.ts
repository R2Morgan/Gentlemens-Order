import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivaryPolicyPageComponent } from './privary-policy-page.component';

describe('PrivaryPolicyPageComponent', () => {
  let component: PrivaryPolicyPageComponent;
  let fixture: ComponentFixture<PrivaryPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivaryPolicyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivaryPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
