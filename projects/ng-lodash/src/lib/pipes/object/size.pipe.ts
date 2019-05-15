import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_size'
})
export class SizePipe implements PipeTransform {
  public transform(collection: object | string): number {
    return _.size(collection);
  }
}
