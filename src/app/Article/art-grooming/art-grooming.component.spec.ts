import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGroomingComponent } from './art-grooming.component';

describe('ArtGroomingComponent', () => {
  let component: ArtGroomingComponent;
  let fixture: ComponentFixture<ArtGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
