import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthPartComponent } from './fifth-part.component';

describe('FifthPartComponent', () => {
  let component: FifthPartComponent;
  let fixture: ComponentFixture<FifthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
