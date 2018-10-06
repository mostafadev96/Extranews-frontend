import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentTopNewsComponent } from './entertainment-top-news.component';

describe('EntertainmentTopNewsComponent', () => {
  let component: EntertainmentTopNewsComponent;
  let fixture: ComponentFixture<EntertainmentTopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentTopNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentTopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
