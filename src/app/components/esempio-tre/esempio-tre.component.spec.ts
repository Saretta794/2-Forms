import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioTreComponent } from './esempio-tre.component';

describe('EsempioTreComponent', () => {
  let component: EsempioTreComponent;
  let fixture: ComponentFixture<EsempioTreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsempioTreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsempioTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
