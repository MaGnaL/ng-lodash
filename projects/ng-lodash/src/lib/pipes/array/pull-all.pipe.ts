import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_pullAll'
})
export class PullAllPipe implements PipeTransform {
  public transform<T>(array: _.List<T>, values?: _.List<T>): _.List<T> {
    return _.pullAll(array, values);
  }
}
