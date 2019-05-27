import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_xor'
})
export class XorPipe implements PipeTransform {
  public transform<T>(...arrays: Array<_.List<T> | null | undefined>): T[] {
    return _.xor(...arrays);
  }
}
