import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePostingComponent } from './store-posting.component';

describe('StorePostingComponent', () => {
  let component: StorePostingComponent;
  let fixture: ComponentFixture<StorePostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
