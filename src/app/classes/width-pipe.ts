import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatWidth'})
export class WidthPipe implements PipeTransform {
  transform(value: number) {
    if (value < 480) {
      return '0';
    } else if (value < 768) {
      return '480';
    } else if (value < 992) {
      return '768';
    } else {
      return '992';
    }
  }
}
