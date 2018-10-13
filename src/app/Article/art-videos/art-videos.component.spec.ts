import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtVideosComponent } from './art-videos.component';

describe('ArtVideosComponent', () => {
  let component: ArtVideosComponent;
  let fixture: ComponentFixture<ArtVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
