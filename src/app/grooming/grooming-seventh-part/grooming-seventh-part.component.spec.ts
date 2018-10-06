import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingSeventhPartComponent } from './grooming-seventh-part.component';

describe('GroomingSeventhPartComponent', () => {
  let component: GroomingSeventhPartComponent;
  let fixture: ComponentFixture<GroomingSeventhPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingSeventhPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingSeventhPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
