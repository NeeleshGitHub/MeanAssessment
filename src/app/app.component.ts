import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from  '@angular/router';
import { AuthenticateService } from './authenticate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service : AuthenticateService) {

  }
  doThis() {
    localStorage.removeItem('role');
    localStorage.removeItem('email');
  }
}
