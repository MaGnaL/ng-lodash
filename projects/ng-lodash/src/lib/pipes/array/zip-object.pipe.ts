import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_zipObject'
})
export class ZipObjectPipe implements PipeTransform {
  public transform<T>(
    props: _.List<_.PropertyName>,
    values: _.List<T>
  ): _.Dictionary<T> {
    return _.zipObject(props, values);
  }
}
