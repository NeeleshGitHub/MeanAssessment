import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcht'
})
export class SearchtPipe implements PipeTransform {

  transform(tvseries: any, searcht: any): any {
    if (!searcht) {      
      return tvseries;    
    }    
    return tvseries.filter(re =>      
      re.tvName.toLowerCase().indexOf(searcht.toLowerCase()) > -1 ||     
       re.genres.toLowerCase().indexOf(searcht.toLowerCase()) > -1 );  }
  }


