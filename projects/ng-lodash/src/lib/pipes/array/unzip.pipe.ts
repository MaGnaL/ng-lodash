import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_unzip'
})
export class UnzipPipe implements PipeTransform {
  public transform<T>(
    array: T[][] | _.List<_.List<T>> | null | undefined
  ): T[][] {
    return _.unzip(array);
  }
}
