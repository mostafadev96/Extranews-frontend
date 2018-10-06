import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureSixthPartComponent } from './culture-sixth-part.component';

describe('CultureSixthPartComponent', () => {
  let component: CultureSixthPartComponent;
  let fixture: ComponentFixture<CultureSixthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureSixthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureSixthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
