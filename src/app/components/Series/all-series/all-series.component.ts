import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/Series.model';
import { SeriesApiService } from 'src/app/services/series-api.service';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.css']
})
export class AllSeriesComponent implements OnInit{
  allSeries: Series[] = []
  
  constructor(private seriesApi: SeriesApiService){}

  ngOnInit(): void {
    this.getAllSeries()
  }

  getAllSeries(){
    this.seriesApi.getAllSeries().subscribe({
      next:(series) =>
       this.allSeries = series
    })
  }
}
