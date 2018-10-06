import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureThirdPartComponent } from './culture-third-part.component';

describe('CultureThirdPartComponent', () => {
  let component: CultureThirdPartComponent;
  let fixture: ComponentFixture<CultureThirdPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureThirdPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
