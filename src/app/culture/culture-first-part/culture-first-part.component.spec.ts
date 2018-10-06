import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFirstPartComponent } from './culture-first-part.component';

describe('CultureFirstPartComponent', () => {
  let component: CultureFirstPartComponent;
  let fixture: ComponentFixture<CultureFirstPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFirstPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
