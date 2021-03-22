import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDropdownComponent } from './lc-dropdown.component';

describe('LcDropdownComponent', () => {
  let component: LcDropdownComponent;
  let fixture: ComponentFixture<LcDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
