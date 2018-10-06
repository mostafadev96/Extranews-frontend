import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureSeventhPartComponent } from './culture-seventh-part.component';

describe('CultureSeventhPartComponent', () => {
  let component: CultureSeventhPartComponent;
  let fixture: ComponentFixture<CultureSeventhPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureSeventhPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureSeventhPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
