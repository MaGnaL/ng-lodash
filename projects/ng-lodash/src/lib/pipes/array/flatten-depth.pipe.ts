import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_flattenDepth'
})
export class FlattenDepthPipe implements PipeTransform {
  public transform<T>(
    array: _.ListOfRecursiveArraysOrValues<T> | null | undefined,
    depth?: number
  ): T[] {
    return _.flattenDepth(array, depth);
  }
}
