import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalsubjectComponent } from './normalsubject.component';

describe('NormalsubjectComponent', () => {
  let component: NormalsubjectComponent;
  let fixture: ComponentFixture<NormalsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
