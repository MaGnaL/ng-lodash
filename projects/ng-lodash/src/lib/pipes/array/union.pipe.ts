import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_union'
})
export class UnionPipe implements PipeTransform {
  public transform<T>(...arrays: Array<_.List<T> | null | undefined>): T[] {
    return _.union(...arrays);
  }
}
