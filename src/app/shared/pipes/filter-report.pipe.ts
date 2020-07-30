import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRepor'
})
export class FilterReportsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost =  [];
    for( const report of value ) {
      if( report.razon.toLowerCase().indexOf(arg.toLowerCase()) >-1){
          resultPost.push(report);
      };
    };
    return resultPost;
  }
}
