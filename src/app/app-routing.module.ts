import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllMoviesComponent } from './components/Movies/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/Movies/movie-details/movie-details.component';
import { AllSeriesComponent } from './components/Series/all-series/all-series.component';
import { SeriesDetailsComponent } from './components/Series/series-details/series-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "all-movie",
    component: AllMoviesComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
  },
  {
    path: "all-series",
    component: AllSeriesComponent
  },
  {
    path: "series/:id",
    component: SeriesDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
