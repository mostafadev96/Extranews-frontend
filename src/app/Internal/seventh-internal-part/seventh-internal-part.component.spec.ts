import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhInternalPartComponent } from './seventh-internal-part.component';

describe('SeventhInternalPartComponent', () => {
  let component: SeventhInternalPartComponent;
  let fixture: ComponentFixture<SeventhInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
