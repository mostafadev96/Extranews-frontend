import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsInternalPartComponent } from './top-news-internal-part.component';

describe('TopNewsInternalPartComponent', () => {
  let component: TopNewsInternalPartComponent;
  let fixture: ComponentFixture<TopNewsInternalPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNewsInternalPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsInternalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
