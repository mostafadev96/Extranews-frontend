import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentFourthPartComponent } from './entertainment-fourth-part.component';

describe('EntertainmentFourthPartComponent', () => {
  let component: EntertainmentFourthPartComponent;
  let fixture: ComponentFixture<EntertainmentFourthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentFourthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentFourthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
