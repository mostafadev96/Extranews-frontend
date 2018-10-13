import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInternalPartComponent } from './first-internal-part.component';

describe('FirstInternalPartComponent', () => {
  let component: FirstInternalPartComponent;
  let fixture: ComponentFixture<FirstInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
