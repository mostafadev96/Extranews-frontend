import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingSixthPartComponent } from './grooming-sixth-part.component';

describe('GroomingSixthPartComponent', () => {
  let component: GroomingSixthPartComponent;
  let fixture: ComponentFixture<GroomingSixthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingSixthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingSixthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
