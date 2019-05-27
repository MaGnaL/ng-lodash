import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_zipObjectDeep'
})
export class ZipObjectDeepPipe implements PipeTransform {
  public transform(
    paths?: _.List<_.PropertyPath>,
    values?: _.List<any>
  ): object {
    return _.zipObjectDeep(paths, values);
  }
}
