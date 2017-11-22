import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {ExitService} from '../exit.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthenticateService,private userService: ExitService ,private router:Router) { }

  ngOnInit() {
  }
signup(){
  
  var name=(<HTMLInputElement>document.getElementById("f_name")).value;
  var Lastname=(<HTMLInputElement>document.getElementById("l_name")).value;
  var Email=(<HTMLInputElement>document.getElementById("email")).value;
  var password=(<HTMLInputElement>document.getElementById("pwd")).value;
  var name=name + Lastname;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?(\w{5,7})+)*(\.\w{2,3})+$/.test(Email) == false) {
    alert("Error:Enter Valid Email");
  }
    else{
      alert("Success");
      this.router.navigate(['Login']);
  this.service.onSignup(name,Email,password).subscribe(res=>{console.log(res);
   
  });
  }
}
}