import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorrsComponent } from './errorrs.component';

describe('ErrorrsComponent', () => {
  let component: ErrorrsComponent;
  let fixture: ComponentFixture<ErrorrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
