import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_concat'
})
export class ConcatPipe implements PipeTransform {
  public transform(value: any[], ...args): any {
    return _.concat(value, ...args);
  }
}
