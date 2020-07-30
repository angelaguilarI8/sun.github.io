import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 2) return value;
    const resultPost =  [];
    for( const product of value ) {
      if( product.titulo.toLowerCase().indexOf(arg.toLowerCase()) >-1){
          resultPost.push(product);
      };
    };
    return resultPost;
  }
}
