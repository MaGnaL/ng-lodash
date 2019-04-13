import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_get'
})
export class GetPipe implements PipeTransform {
  public transform(object: Object, path: string, defaultValue?: any): any {
    return _.get(object, path, defaultValue);
  }
}
