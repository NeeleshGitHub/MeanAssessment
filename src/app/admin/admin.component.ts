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


//   imageConverter($event)
//   {
//     console.log(event);
//     console.log(event.target);
//     this.encodeImageFileAsURL(event.target);
//   }

//   encodeImageFileAsURL(element) {
//     var file = element.files[0];
//     var reader = new FileReader();
//     console.log(file);
//     this.uploadMoviePics=file;
//     console.log(this.uploadMoviePics);
//   //  this.service.updatePicture(file)
// }

// uploadImage() {
  //   let path = '';
  //   const headers = new Headers({
  //     'Authorization': 'Bearer ' + localStorage.getItem('token')
  //   });

  //   const options = new RequestOptions({ headers: headers });
  //   const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#imageField');
  //   const fileCount: number = inputEl.files.length;
  //   const formData = new FormData();
  //   if (fileCount > 0) {
  //     formData.append('imageField', inputEl.files.item(0));
  //     this.service.updatePicture(formData, options).subscribe(res => {
  //       const result = JSON.parse(res.text());
  //       path = JSON.parse(res.text()).path;
  //       window.location.reload();
  //       alert('Upload completed successfully !');
  //     },
  //       (error) => alert(error));
  //     }
  //   }
  // }


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
    this.service.onAddmovie(name,genres,description)
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
    });
  }

}
