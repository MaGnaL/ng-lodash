import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_sample'
})
export class SamplePipe implements PipeTransform {
  public transform(value: any, ...args): any {
    return _.sample();
  }
}
