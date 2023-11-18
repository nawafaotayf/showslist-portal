import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllMoviesComponent } from './components/Movies/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/Movies/movie-details/movie-details.component';
import { AllSeriesComponent } from './components/Series/all-series/all-series.component';
import { SeriesDetailsComponent } from './components/Series/series-details/series-details.component';
import { FavoriteDetailsComponent } from './components/Favorite/favorite-details/favorite-details.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { EditProfileComponent } from './components/User/edit-profile/edit-profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFound404Component } from './components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: "all-movie",
    canActivate: [AuthGuardService],
    component: AllMoviesComponent
  },
  {
    path: "movie/:id",
    canActivate: [AuthGuardService],
    component: MovieDetailsComponent
  },
  {
    path: "all-series",
    canActivate: [AuthGuardService],
    component: AllSeriesComponent
  },
  {
    path: "series/:id",
    canActivate: [AuthGuardService],
    component: SeriesDetailsComponent
  },
  {
    path: "favorite",
    canActivate: [AuthGuardService],
    component: FavoriteDetailsComponent
  },
  {
    path: "profile",
    canActivate: [AuthGuardService],
    component: ProfileComponent
  },
  {
    path: "edit-profile/:id",
    canActivate: [AuthGuardService],
    component: EditProfileComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "**",
    component: NotFound404Component
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
