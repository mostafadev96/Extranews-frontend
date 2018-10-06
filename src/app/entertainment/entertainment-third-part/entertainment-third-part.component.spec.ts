import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentThirdPartComponent } from './entertainment-third-part.component';

describe('EntertainmentThirdPartComponent', () => {
  let component: EntertainmentThirdPartComponent;
  let fixture: ComponentFixture<EntertainmentThirdPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentThirdPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
