import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_pull'
})
export class PullPipe implements PipeTransform {
  public transform<T>(array: _.List<T>, ...values: T[]): _.List<T> {
    return _.pull(array, ...values);
  }
}
