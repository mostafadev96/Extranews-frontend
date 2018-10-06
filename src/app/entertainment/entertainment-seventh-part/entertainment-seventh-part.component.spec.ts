import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSeventhPartComponent } from './entertainment-seventh-part.component';

describe('EntertainmentSeventhPartComponent', () => {
  let component: EntertainmentSeventhPartComponent;
  let fixture: ComponentFixture<EntertainmentSeventhPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentSeventhPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentSeventhPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
