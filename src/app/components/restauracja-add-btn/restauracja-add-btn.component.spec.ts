import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaAddBtnComponent } from './restauracja-add-btn.component';

describe('RestauracjaAddBtnComponent', () => {
  let component: RestauracjaAddBtnComponent;
  let fixture: ComponentFixture<RestauracjaAddBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaAddBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
