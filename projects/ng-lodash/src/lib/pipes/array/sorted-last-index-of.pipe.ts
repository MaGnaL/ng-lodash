import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sortedLastIndexOf'
})
export class SortedLastIndexOfPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, value: T): number {
    return _.sortedLastIndexOf(array, value);
  }
}
