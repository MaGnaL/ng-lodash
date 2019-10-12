import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_last'
})
export class LastPipe implements PipeTransform {
  public transform<T>(array: _.List<T> | null | undefined): T | undefined {
    return _.last(array);
  }
}
