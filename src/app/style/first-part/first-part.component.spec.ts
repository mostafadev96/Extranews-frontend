import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPartComponent } from './first-part.component';

describe('FirstPartComponent', () => {
  let component: FirstPartComponent;
  let fixture: ComponentFixture<FirstPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
