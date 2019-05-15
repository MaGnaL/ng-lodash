import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_compact'
})
export class CompactPipe implements PipeTransform {
  public transform(value: any[]): any[] {
    return _.compact(value);
  }
}
