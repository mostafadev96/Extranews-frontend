import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthInternalPartComponent } from './sixth-internal-part.component';

describe('SixthInternalPartComponent', () => {
  let component: SixthInternalPartComponent;
  let fixture: ComponentFixture<SixthInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
