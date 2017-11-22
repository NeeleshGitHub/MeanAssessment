import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: AuthenticateService) { }

  ngOnInit() {
  }

  deleteTv(name) {
    console.log(name);
    this.service.onDeletetvseries(name).subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Deleted Successfully');
      } else {
        alert('Deletion failed.');
      }
    });
  }

  deleteMovie(name) {
    console.log(name);
    this.service.onDeletemovies(name).subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Deleted Successfully');
      } else {
        alert('Deletion failed.');
      }
    });
  }

  insertMovie(name,genres,url,description) {
    console.log(name,genres,url);
    this.service.onAddmovie(name,genres,url,description)
    .subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Inserted Successfully');
      } else {
        alert('Inserting failed.');
      }
    });
  }

  insertTv(name,genres,url,description) {
    console.log(name,genres,url,description)
    this.service.onAddtvseries(name,genres,url,description)
    .subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Inserted Successfully');
      } else {
        alert('Inserting failed.');
      }
    })
    ;
  }

}
