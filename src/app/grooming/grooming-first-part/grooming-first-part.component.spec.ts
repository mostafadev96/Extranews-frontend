import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingFirstPartComponent } from './grooming-first-part.component';

describe('GroomingFirstPartComponent', () => {
  let component: GroomingFirstPartComponent;
  let fixture: ComponentFixture<GroomingFirstPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingFirstPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
