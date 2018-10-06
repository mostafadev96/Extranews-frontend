import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingTopNewsComponent } from './grooming-top-news.component';

describe('GroomingTopNewsComponent', () => {
  let component: GroomingTopNewsComponent;
  let fixture: ComponentFixture<GroomingTopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingTopNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingTopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
