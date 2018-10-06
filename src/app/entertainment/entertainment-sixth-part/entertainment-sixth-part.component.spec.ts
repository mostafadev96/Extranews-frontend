import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSixthPartComponent } from './entertainment-sixth-part.component';

describe('EntertainmentSixthPartComponent', () => {
  let component: EntertainmentSixthPartComponent;
  let fixture: ComponentFixture<EntertainmentSixthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentSixthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentSixthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
