import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhPartComponent } from './seventh-part.component';

describe('SeventhPartComponent', () => {
  let component: SeventhPartComponent;
  let fixture: ComponentFixture<SeventhPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
