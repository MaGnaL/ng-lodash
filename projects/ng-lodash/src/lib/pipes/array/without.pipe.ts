import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_without'
})
export class WithoutPipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    ...values: T[]
  ): T[] {
    return _.without(array, ...values);
  }
}
