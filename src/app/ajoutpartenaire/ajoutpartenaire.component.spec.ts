import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpartenaireComponent } from './ajoutpartenaire.component';

describe('AjoutpartenaireComponent', () => {
  let component: AjoutpartenaireComponent;
  let fixture: ComponentFixture<AjoutpartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutpartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
