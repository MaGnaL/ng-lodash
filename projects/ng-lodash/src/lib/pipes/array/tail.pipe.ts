import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_tail'
})
export class TailPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T[] {
    return _.tail(array);
  }
}
