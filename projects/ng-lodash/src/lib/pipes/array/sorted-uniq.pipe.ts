import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sortedUniq'
})
export class SortedUniqPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T[] {
    return _.sortedUniq(array);
  }
}
