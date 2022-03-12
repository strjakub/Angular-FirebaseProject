import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaContainerComponent } from './restauracja-container.component';

describe('RestauracjaContainerComponent', () => {
  let component: RestauracjaContainerComponent;
  let fixture: ComponentFixture<RestauracjaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
