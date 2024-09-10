import { Pipe, PipeTransform } from '@angular/core';

//https://stackoverflow.com/questions/37511055/how-to-check-type-of-variable-in-ngif-in-angular2
//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date

@Pipe({
  standalone: true,
  name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
  transform(value: any): any {
    //console.log('Pipe works ', Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value);
  }
}
