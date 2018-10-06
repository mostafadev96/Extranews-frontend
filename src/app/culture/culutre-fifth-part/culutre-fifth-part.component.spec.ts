import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulutreFifthPartComponent } from './culutre-fifth-part.component';

describe('CulutreFifthPartComponent', () => {
  let component: CulutreFifthPartComponent;
  let fixture: ComponentFixture<CulutreFifthPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulutreFifthPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulutreFifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
