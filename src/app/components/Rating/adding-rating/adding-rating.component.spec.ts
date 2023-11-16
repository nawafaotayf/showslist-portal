import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingRatingComponent } from './adding-rating.component';

describe('AddingRatingComponent', () => {
  let component: AddingRatingComponent;
  let fixture: ComponentFixture<AddingRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingRatingComponent]
    });
    fixture = TestBed.createComponent(AddingRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
