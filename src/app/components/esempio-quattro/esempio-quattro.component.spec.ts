import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioQuattroComponent } from './esempio-quattro.component';

describe('EsempioQuattroComponent', () => {
  let component: EsempioQuattroComponent;
  let fixture: ComponentFixture<EsempioQuattroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsempioQuattroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsempioQuattroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
