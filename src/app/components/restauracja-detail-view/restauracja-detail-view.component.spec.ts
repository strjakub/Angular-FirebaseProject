import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracjaDetailViewComponent } from './restauracja-detail-view.component';

describe('RestauracjaDetailViewComponent', () => {
  let component: RestauracjaDetailViewComponent;
  let fixture: ComponentFixture<RestauracjaDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauracjaDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauracjaDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
