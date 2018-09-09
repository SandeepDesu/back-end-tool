import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndexTwoComponent } from './main-index-two.component';

describe('MainIndexTwoComponent', () => {
  let component: MainIndexTwoComponent;
  let fixture: ComponentFixture<MainIndexTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIndexTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndexTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
