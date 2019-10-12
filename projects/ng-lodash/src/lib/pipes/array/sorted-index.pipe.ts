import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sortedIndex'
})
export class SortedIndexPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, value: T): number {
    return _.sortedIndex(array, value);
  }
}
