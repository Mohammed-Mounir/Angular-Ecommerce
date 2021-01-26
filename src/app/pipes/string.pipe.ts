import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string',
})
export class StringPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 50) {
      return value.slice(0, 49) + ' see more...';
    }
  }
}
