import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Http, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  showAdmin ='';
  constructor(private service : AuthenticateService, private http: Http, private el: ElementRef) { 
    this.showAdmin = this.service.role;
  }

  ngOnInit() {
  }


}