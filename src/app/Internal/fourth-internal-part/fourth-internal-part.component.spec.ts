import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthInternalPartComponent } from './fourth-internal-part.component';

describe('FourthInternalPartComponent', () => {
  let component: FourthInternalPartComponent;
  let fixture: ComponentFixture<FourthInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
