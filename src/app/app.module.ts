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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddToFavoriteComponent } from './components/Favorite/add-to-favorite/add-to-favorite.component';
import { FavoriteDetailsComponent } from './components/Favorite/favorite-details/favorite-details.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { EditProfileComponent } from './components/User/edit-profile/edit-profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HeadersComponent } from './components/header/headers/headers.component';
import { AvgrageRatingComponent } from './components/Favorite/avgrage-rating/avgrage-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllUsersComponent } from './components/User/all-users/all-users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'



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
    AddToFavoriteComponent,
    FavoriteDetailsComponent,
    ProfileComponent,
    EditProfileComponent,
    SignupComponent,
    LoginComponent,
    NavBarComponent,
    NotFound404Component,
    HeadersComponent,
    AvgrageRatingComponent,
    AllUsersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
