import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaFormComponent } from './restauracja-form.component';

describe('RestauracjaFormComponent', () => {
  let component: RestauracjaFormComponent;
  let fixture: ComponentFixture<RestauracjaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
