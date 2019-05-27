import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_uniq'
})
export class UniqPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T[] {
    return _.uniq(array);
  }
}
