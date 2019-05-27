import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sortedLastIndex'
})
export class SortedLastIndexPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, value: T): number {
    return _.sortedLastIndex(array, value);
  }
}
