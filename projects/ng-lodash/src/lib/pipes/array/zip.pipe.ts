import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_zip'
})
export class ZipPipe implements PipeTransform {
  public transform<T>(
    ...arrays: Array<_.List<T> | null | undefined>
  ): Array<Array<T | undefined>> {
    return _.zip(...arrays);
  }
}
