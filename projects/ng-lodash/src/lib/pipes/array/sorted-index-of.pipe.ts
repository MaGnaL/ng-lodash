import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sortedIndexOf'
})
export class SortedIndexOfPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, value: T): number {
    return _.sortedIndexOf(array, value);
  }
}
