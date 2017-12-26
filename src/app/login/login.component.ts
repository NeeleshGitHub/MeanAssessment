import { Component, OnInit } from '@angular/core';
import { Router} from'@angular/router';
import { ExitService } from '../exit.service';
import {AuthenticateService} from '../authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   user: any = [];
   app;
   token: any; 
   data;
   userDetails: Object;
   userInfo: boolean = false;

  constructor(private router: Router ,private service: ExitService , private loginService: AuthenticateService ) {
    
  }
  ngOnInit() {
  }

login(email: string, password: string) {
  this.loginService.onLogin(email)
  .subscribe(res => {
    var token = JSON.parse(res.text()).token;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    this.service.email = JSON.parse(window.atob(base64)).email;
    var pass = JSON.parse(window.atob(base64)).password;
    this.loginService.role = JSON.parse(window.atob(base64)).role;
    if (res == null) {
      console.log('Error occurred null');
      alert('Error occurred null');
    } else if (pass === password) {
      console.log(this.service.email);
      localStorage.setItem('email', this.user.email);
      localStorage.setItem('jwt', this.user.token);
      this.router.navigate(['/userview']);
      this.service.exit = false;
      return this.service.exit;
    } else {
     console.log('Error occurred');
      alert('Error occurred');
    }
});
}
}