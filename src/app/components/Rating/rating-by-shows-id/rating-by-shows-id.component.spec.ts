import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingByShowsIdComponent } from './rating-by-shows-id.component';

describe('RatingByShowsIdComponent', () => {
  let component: RatingByShowsIdComponent;
  let fixture: ComponentFixture<RatingByShowsIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingByShowsIdComponent]
    });
    fixture = TestBed.createComponent(RatingByShowsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
