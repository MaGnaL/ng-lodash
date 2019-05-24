import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_join'
})
export class JoinPipe implements PipeTransform {
  public transform(
    array: _.List<any> | null | undefined,
    separator?: string
  ): string {
    return _.join(array, separator);
  }
}
