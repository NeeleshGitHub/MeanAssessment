import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import {ExitService} from '../exit.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movie: any =[];
  constructor(private service: AuthenticateService, private exitService: ExitService) {
  }

  ngOnInit() {
    this.service.onMovies().subscribe(res=>{this.movie=JSON.parse(res.text())});
  }
  

}
