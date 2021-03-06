import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_difference'
})
export class DifferencePipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    ...values: Array<_.List<T>>
  ): T[] {
    return _.difference(array, ...values);
  }
}
