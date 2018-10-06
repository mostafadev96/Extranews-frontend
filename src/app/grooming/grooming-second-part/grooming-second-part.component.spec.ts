import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingSecondPartComponent } from './grooming-second-part.component';

describe('GroomingSecondPartComponent', () => {
  let component: GroomingSecondPartComponent;
  let fixture: ComponentFixture<GroomingSecondPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingSecondPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
