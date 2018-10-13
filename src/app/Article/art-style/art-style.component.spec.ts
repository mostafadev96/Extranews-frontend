import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtStyleComponent } from './art-style.component';

describe('ArtStyleComponent', () => {
  let component: ArtStyleComponent;
  let fixture: ComponentFixture<ArtStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
