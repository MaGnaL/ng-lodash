import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_size'
})
export class SizePipe implements PipeTransform {
  public transform(collection: object | string | null | undefined): number {
    return _.size(collection);
  }
}
