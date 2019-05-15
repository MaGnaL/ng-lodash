import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_difference'
})
export class DifferencePipe implements PipeTransform {
  public transform<T>(
    array: ArrayLike<T> | null | undefined,
    ...values: Array<ArrayLike<T>>
  ): T[] {
    return _.difference(array, ...values);
  }
}
