import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentFifthPartComponent } from './entertainment-fifth-part.component';

describe('EntertainmentFifthPartComponent', () => {
  let component: EntertainmentFifthPartComponent;
  let fixture: ComponentFixture<EntertainmentFifthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentFifthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentFifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
