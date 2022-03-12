import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaAdminviewComponent } from './restauracja-adminview.component';

describe('RestauracjaAdminviewComponent', () => {
  let component: RestauracjaAdminviewComponent;
  let fixture: ComponentFixture<RestauracjaAdminviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaAdminviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaAdminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
