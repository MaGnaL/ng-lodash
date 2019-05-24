import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_pullAt'
})
export class PullAtPipe implements PipeTransform {
  public transform<T>(
    array: _.List<T>,
    ...indexes: Array<_.Many<number>>
  ): _.List<T> {
    return _.pullAt(array, ...indexes);
  }
}
