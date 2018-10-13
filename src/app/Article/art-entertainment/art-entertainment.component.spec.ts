import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtEntertainmentComponent } from './art-entertainment.component';

describe('ArtEntertainmentComponent', () => {
  let component: ArtEntertainmentComponent;
  let fixture: ComponentFixture<ArtEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
