import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioUnoComponent } from './esempio-uno.component';

describe('EsempioUnoComponent', () => {
  let component: EsempioUnoComponent;
  let fixture: ComponentFixture<EsempioUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsempioUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsempioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
