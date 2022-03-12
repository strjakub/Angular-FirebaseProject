import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaDishItemComponent } from './restauracja-dish-item.component';

describe('RestauracjaDishItemComponent', () => {
  let component: RestauracjaDishItemComponent;
  let fixture: ComponentFixture<RestauracjaDishItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaDishItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaDishItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
