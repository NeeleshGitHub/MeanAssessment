import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { ExitService } from '../exit.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {
  public tvseries: any =[];
  constructor(private service: AuthenticateService, private exitService: ExitService) {
  }

  async ngOnInit() {
    this.service.onTvseries().subscribe(res=>{this.tvseries=JSON.parse(res.text());console.log(this.tvseries);});
    
  }
}
