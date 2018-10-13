import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdInternalPartComponent } from './third-internal-part.component';

describe('ThirdInternalPartComponent', () => {
  let component: ThirdInternalPartComponent;
  let fixture: ComponentFixture<ThirdInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
