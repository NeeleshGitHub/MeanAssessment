import { Injectable } from '@angular/core';
import { Http,  RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticateService {
  constructor(private http: Http) {
    // this.setToken();
  }
  
  email = '';
  role : string;
  address = 'http://192.168.15.62:8888/api/t3/';

  // setToken() {
  //   const token = localStorage.getItem('token');
  //   if (token !== null) {
  //     const base64Url = token.split('.')[1];
  //     const base64 = base64Url.replace('-', '+').replace('_', '/');
  //     this.email = JSON.parse(window.atob(base64)).email;
  //     this.role = JSON.parse(window.atob(base64)).role;
  //   }
  // }

  setHeader(){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  onSignup( name: string,email: string, password: string) {
   return  this.http.post(this.address + 'createUser',
    ({ email : email , name: name, password: password}));
  }

  onLogin(email: string) {
    return this.http.get(this.address + 'getUser/' + email);
  }

  onMovies() {
    return this.http.get(this.address + 'getAllMovies/');
  }

  onTvseries() {
    return this.http.get(this.address + 'getAllTvseries');
  }

  onAddmovie(name,genres,description){
    console.log(name,genres);
      return this.http.post(this.address + 'insertMovie/',{movName:name , genres: genres, desc: description});
    }
 
    onAddtvseries(name,genres,imgAddress,description){
      console.log(genres);
      return this.http.post(this.address + 'insertTvseries/',{tvName:name , genres: genres,  tvImg:imgAddress,desc: description});
    }

    onDeletemovies(name){
      return this.http.delete(this.address + 'deleteMovie/' + name);
    }
  
  onDeletetvseries(name){
      return this.http.delete(this.address + 'deleteTv/' + name);
    }

    updatePicture(image, movName: string) {
      // this.setToken();
      console.log(image);
      console.log(movName);
      const formData = new FormData();
     
        formData.append('file', image,image.name);
        console.log(formData);
      return this.http.post(this.address + 'upload/'+ movName, formData).map(res=>res.json());
    }
    
    isLoggedIn() {
      return localStorage.getItem('email') === null ? false : true;
    }
  
}