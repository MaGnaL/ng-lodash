import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_head'
})
export class HeadPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T | undefined {
    return _.head(array);
  }
}
