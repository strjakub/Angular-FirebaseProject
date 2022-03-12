import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaInfoComponent } from './restauracja-info.component';

describe('RestauracjaInfoComponent', () => {
  let component: RestauracjaInfoComponent;
  let fixture: ComponentFixture<RestauracjaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
