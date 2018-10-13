import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthInternalPartComponent } from './fifth-internal-part.component';

describe('FifthInternalPartComponent', () => {
  let component: FifthInternalPartComponent;
  let fixture: ComponentFixture<FifthInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
