import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioDueComponent } from './esempio-due.component';

describe('EsempioDueComponent', () => {
  let component: EsempioDueComponent;
  let fixture: ComponentFixture<EsempioDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsempioDueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsempioDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
