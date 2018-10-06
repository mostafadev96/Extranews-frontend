import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingFifthPartComponent } from './grooming-fifth-part.component';

describe('GroomingFifthPartComponent', () => {
  let component: GroomingFifthPartComponent;
  let fixture: ComponentFixture<GroomingFifthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingFifthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingFifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
