import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_initial'
})
export class InitialPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T[] {
    return _.initial(array);
  }
}
