import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetaitComponent } from './retait.component';

describe('RetaitComponent', () => {
  let component: RetaitComponent;
  let fixture: ComponentFixture<RetaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
