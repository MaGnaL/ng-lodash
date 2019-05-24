import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_flattenDeep'
})
export class FlattenDeepPipe implements PipeTransform {
  public transform<T>(
    array: _.ListOfRecursiveArraysOrValues<T> | null | undefined
  ): T[] {
    return _.flattenDeep(array);
  }
}
