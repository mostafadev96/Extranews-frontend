import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSecondPartComponent } from './entertainment-second-part.component';

describe('EntertainmentSecondPartComponent', () => {
  let component: EntertainmentSecondPartComponent;
  let fixture: ComponentFixture<EntertainmentSecondPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentSecondPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
