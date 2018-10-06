import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureTopNewsComponent } from './culture-top-news.component';

describe('CultureTopNewsComponent', () => {
  let component: CultureTopNewsComponent;
  let fixture: ComponentFixture<CultureTopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureTopNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureTopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
