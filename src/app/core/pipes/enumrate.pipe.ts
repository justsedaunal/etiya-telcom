import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumrate'
})
export class EnumratePipe implements PipeTransform {

  transform(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(i);
    }
    return  arr
  }

}
