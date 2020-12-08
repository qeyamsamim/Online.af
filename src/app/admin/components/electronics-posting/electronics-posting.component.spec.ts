import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsPostingComponent } from './electronics-posting.component';

describe('ElectronicsPostingComponent', () => {
  let component: ElectronicsPostingComponent;
  let fixture: ComponentFixture<ElectronicsPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
