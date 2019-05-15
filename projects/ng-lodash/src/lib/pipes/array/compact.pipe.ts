import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_compact'
})
export class CompactPipe implements PipeTransform {
  public transform<T>(
    array: ArrayLike<T | null | undefined | false | '' | 0> | null | undefined
  ): T[] {
    return _.compact(array);
  }
}
