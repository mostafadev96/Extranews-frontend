import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTopNewsComponent } from './style-top-news.component';

describe('StyleTopNewsComponent', () => {
  let component: StyleTopNewsComponent;
  let fixture: ComponentFixture<StyleTopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleTopNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
