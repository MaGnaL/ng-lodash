import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_difference'
})
export class DifferencePipe implements PipeTransform {
  public transform(value: any[], ...arr: any[]): any[] {
    return _.difference(value, ...arr);
  }
}
