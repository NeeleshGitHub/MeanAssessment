import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  showAdmin ='';
  constructor() { 
    this.showAdmin = localStorage.getItem('role');
  }

  ngOnInit() {
  }

}
