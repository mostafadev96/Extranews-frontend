import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentFirstPartComponent } from './entertainment-first-part.component';

describe('EntertainmentFirstPartComponent', () => {
  let component: EntertainmentFirstPartComponent;
  let fixture: ComponentFixture<EntertainmentFirstPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentFirstPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
