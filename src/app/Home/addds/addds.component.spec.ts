import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddsComponent } from './addds.component';

describe('AdddsComponent', () => {
  let component: AdddsComponent;
  let fixture: ComponentFixture<AdddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
