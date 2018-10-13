import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWomenComponent } from './art-women.component';

describe('ArtWomenComponent', () => {
  let component: ArtWomenComponent;
  let fixture: ComponentFixture<ArtWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
