import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingFourthPartComponent } from './grooming-fourth-part.component';

describe('GroomingFourthPartComponent', () => {
  let component: GroomingFourthPartComponent;
  let fixture: ComponentFixture<GroomingFourthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingFourthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingFourthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
