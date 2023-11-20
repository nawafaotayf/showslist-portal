import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgrageRatingComponent } from './avgrage-rating.component';

describe('AvgrageRatingComponent', () => {
  let component: AvgrageRatingComponent;
  let fixture: ComponentFixture<AvgrageRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgrageRatingComponent]
    });
    fixture = TestBed.createComponent(AvgrageRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
