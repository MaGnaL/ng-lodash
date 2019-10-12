import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_lastIndexOf'
})
export class LastIndexOfPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, value: T, fromIndex?: true | number): number {
    return _.lastIndexOf(array, value, fromIndex);
  }
}
