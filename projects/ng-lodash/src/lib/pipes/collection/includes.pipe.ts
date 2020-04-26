import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_includes'
})
export class IncludesPipe implements PipeTransform {
  public transform<T>(
    collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined,
    target: T,
    fromIndex?: number
  ): boolean {
    return _.includes(collection, target, fromIndex);
  }
}
