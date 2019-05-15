import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_has'
})
export class HasPipe implements PipeTransform {
  public transform<T>(object: T, path: _.PropertyPath): boolean {
    return _.has(object, path);
  }
}
