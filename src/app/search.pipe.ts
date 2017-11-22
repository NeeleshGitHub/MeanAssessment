import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movie: any, search: any): any {
    if (!search) {      
      return movie;    
    }    
    return movie.filter(re =>      
      re.movName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||     
       re.genres.toLowerCase().indexOf(search.toLowerCase()) > -1 );  }
  }


