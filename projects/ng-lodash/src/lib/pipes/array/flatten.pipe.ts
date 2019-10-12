import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_flatten'
})
export class FlattenPipe implements PipeTransform {
  public transform<T>(array: _.List<_.Many<T>> | null | undefined): T[] {
    return _.flatten(array);
  }
}
