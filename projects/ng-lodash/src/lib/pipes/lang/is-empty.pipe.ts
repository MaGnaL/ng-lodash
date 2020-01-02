import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  public transform(value: any): boolean {
    return _.isEmpty(value);
  }
}
