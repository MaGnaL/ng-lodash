import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_drop'
})
export class DropPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined, n?: number): T[] {
    return _.drop(array, n);
  }
}
