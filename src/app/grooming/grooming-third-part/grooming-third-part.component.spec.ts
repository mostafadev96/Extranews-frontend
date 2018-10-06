import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingThirdPartComponent } from './grooming-third-part.component';

describe('GroomingThirdPartComponent', () => {
  let component: GroomingThirdPartComponent;
  let fixture: ComponentFixture<GroomingThirdPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingThirdPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
