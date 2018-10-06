import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureSecondPartComponent } from './culture-second-part.component';

describe('CultureSecondPartComponent', () => {
  let component: CultureSecondPartComponent;
  let fixture: ComponentFixture<CultureSecondPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureSecondPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
