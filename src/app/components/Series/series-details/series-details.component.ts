import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Series } from 'src/app/models/Series.model';
import { SeriesApiService } from 'src/app/services/series-api.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit{
  seriesDetails: Series[] = []
  id: number = 0

  constructor(private seriesApi: SeriesApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getSeriesById(this.id)
  }

  getSeriesById(id: number){
    this.seriesApi.getSeriesById(id).subscribe({
      next: (series) =>
      {this.seriesDetails = [series]}
    })
  }
}

