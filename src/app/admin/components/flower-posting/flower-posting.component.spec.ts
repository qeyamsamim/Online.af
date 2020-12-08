import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerPostingComponent } from './flower-posting.component';

describe('FlowerPostingComponent', () => {
  let component: FlowerPostingComponent;
  let fixture: ComponentFixture<FlowerPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
