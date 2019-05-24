import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_fill'
})
export class FillPipe implements PipeTransform {
  public transform<T, U>(
    array: _.List<U> | null | undefined,
    value: T,
    start?: number,
    end?: number
  ): _.List<T | U> {
    return _.fill(array, value, start, end);
  }
}
