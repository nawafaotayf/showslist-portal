import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllMoviesComponent } from './components/Movies/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/Movies/movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { GoBackComponent } from './components/go-back/go-back.component';
import { AllSeriesComponent } from './components/Series/all-series/all-series.component';
import { SeriesDetailsComponent } from './components/Series/series-details/series-details.component';
import { RatingByShowsIdComponent } from './components/Rating/rating-by-shows-id/rating-by-shows-id.component';
import { AddingRatingComponent } from './components/Rating/adding-rating/adding-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllMoviesComponent,
    MovieDetailsComponent,
    GoBackComponent,
    AllSeriesComponent,
    SeriesDetailsComponent,
    RatingByShowsIdComponent,
    AddingRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
