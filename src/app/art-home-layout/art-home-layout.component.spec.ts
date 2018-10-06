import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtHomeLayoutComponent } from './art-home-layout.component';

describe('ArtHomeLayoutComponent', () => {
  let component: ArtHomeLayoutComponent;
  let fixture: ComponentFixture<ArtHomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtHomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
