import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentNewsPart4Component } from './different-news-part4.component';

describe('DifferentNewsPart4Component', () => {
  let component: DifferentNewsPart4Component;
  let fixture: ComponentFixture<DifferentNewsPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentNewsPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentNewsPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
