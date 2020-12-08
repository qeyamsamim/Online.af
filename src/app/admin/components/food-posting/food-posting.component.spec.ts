import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPostingComponent } from './food-posting.component';

describe('FoodPostingComponent', () => {
  let component: FoodPostingComponent;
  let fixture: ComponentFixture<FoodPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
