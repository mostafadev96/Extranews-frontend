import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFourthPartComponent } from './culture-fourth-part.component';

describe('CultureFourthPartComponent', () => {
  let component: CultureFourthPartComponent;
  let fixture: ComponentFixture<CultureFourthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFourthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFourthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
