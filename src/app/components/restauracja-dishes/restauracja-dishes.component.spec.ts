import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaDishesComponent } from './restauracja-dishes.component';

describe('RestauracjaDishesComponent', () => {
  let component: RestauracjaDishesComponent;
  let fixture: ComponentFixture<RestauracjaDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
