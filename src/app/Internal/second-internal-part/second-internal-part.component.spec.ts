import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInternalPartComponent } from './second-internal-part.component';

describe('SecondInternalPartComponent', () => {
  let component: SecondInternalPartComponent;
  let fixture: ComponentFixture<SecondInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
