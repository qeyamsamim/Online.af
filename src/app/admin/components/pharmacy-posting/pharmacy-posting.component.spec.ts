import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPostingComponent } from './pharmacy-posting.component';

describe('PharmacyPostingComponent', () => {
  let component: PharmacyPostingComponent;
  let fixture: ComponentFixture<PharmacyPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
