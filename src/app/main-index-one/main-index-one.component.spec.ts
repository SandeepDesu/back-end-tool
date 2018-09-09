import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndexOneComponent } from './main-index-one.component';

describe('MainIndexOneComponent', () => {
  let component: MainIndexOneComponent;
  let fixture: ComponentFixture<MainIndexOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIndexOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndexOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
