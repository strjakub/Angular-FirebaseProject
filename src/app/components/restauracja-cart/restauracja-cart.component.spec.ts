import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaCartComponent } from './restauracja-cart.component';

describe('RestauracjaCartComponent', () => {
  let component: RestauracjaCartComponent;
  let fixture: ComponentFixture<RestauracjaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
