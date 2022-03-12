import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaDishItemSpecialComponent } from './restauracja-dish-item-special.component';

describe('RestauracjaDishItemSpecialComponent', () => {
  let component: RestauracjaDishItemSpecialComponent;
  let fixture: ComponentFixture<RestauracjaDishItemSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaDishItemSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaDishItemSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
