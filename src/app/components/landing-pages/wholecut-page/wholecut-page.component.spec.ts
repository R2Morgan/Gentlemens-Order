import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholecutPageComponent } from './wholecut-page.component';

describe('WholecutPageComponent', () => {
  let component: WholecutPageComponent;
  let fixture: ComponentFixture<WholecutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WholecutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholecutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
