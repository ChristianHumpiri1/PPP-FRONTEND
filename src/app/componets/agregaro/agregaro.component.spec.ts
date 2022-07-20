import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaroComponent } from './agregaro.component';

describe('AgregaroComponent', () => {
  let component: AgregaroComponent;
  let fixture: ComponentFixture<AgregaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
