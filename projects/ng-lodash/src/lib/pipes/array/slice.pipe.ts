import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_slice'
})
export class SlicePipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    start?: number,
    end?: number
  ): T[] {
    return _.slice(array);
  }
}
