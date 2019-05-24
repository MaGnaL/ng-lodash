import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_concat'
})
export class ConcatPipe implements PipeTransform {
  public transform<T>(array: _.Many<T>, ...values: Array<_.Many<T>>): T[] {
    return _.concat(array, ...values);
  }
}
