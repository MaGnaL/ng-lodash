import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_intersection'
})
export class IntersectionPipe implements PipeTransform {
  public transform<T>(...arrays: Array<_.List<T>>): T[] {
    return _.intersection(...arrays);
  }
}
