import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticateService {
  constructor(private http: Http) {
  }
  email = '';
  role : number;

  onSignup( name: string,email: string, password: string) {
   return  this.http.post('http://192.168.15.62:8888/api/t3/createUser',
    ({ email : email , name: name, password: password}));
  }

  onLogin(email: string) {
    return this.http.get('http://192.168.15.62:8888/api/t3/getUser/' + email);
  }

  onMovies() {
    return this.http.get('http://192.168.15.62:8888/api/t3/getAllMovies/');
  }

  onTvseries() {
    return this.http.get('http://192.168.15.62:8888/api/t3/getAllTvseries');
  }

  onAddmovie(name,genres,imgAddress,description){
    console.log(name,genres,imgAddress);
      return this.http.post('http://192.168.15.62:8888/api/t3/insertMovie/',{movName:name , genres: genres, movImg:imgAddress,desc: description});
    }
 
    onAddtvseries(name,genres,imgAddress,description){
      console.log(genres);
      return this.http.post('http://192.168.15.62:8888/api/t3/insertTvseries/',{tvName:name , genres: genres,  tvImg:imgAddress,desc: description});
    }

    onDeletemovies(name){
      return this.http.delete('http://192.168.15.62:8888/api/t3/deleteMovie/'+name);
    }
  
  onDeletetvseries(name){
      return this.http.delete('http://192.168.15.62:8888/api/t3/deleteTv/'+name);
    }
    
    isLoggedIn() {
      return localStorage.getItem('email') === null ? false : true;
    }
  
}