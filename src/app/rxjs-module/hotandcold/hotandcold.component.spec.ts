import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotandcoldComponent } from './hotandcold.component';

describe('HotandcoldComponent', () => {
  let component: HotandcoldComponent;
  let fixture: ComponentFixture<HotandcoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotandcoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotandcoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
