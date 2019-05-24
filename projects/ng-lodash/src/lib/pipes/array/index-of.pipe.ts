import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_indexOf'
})
export class IndexOfPipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    value: T,
    fromIndex?: number
  ): number {
    return _.indexOf(array, value, fromIndex);
  }
}
