import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_nth'
})
export class NthPipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    n?: number
  ): T | undefined {
    return _.nth(array, n);
  }
}
