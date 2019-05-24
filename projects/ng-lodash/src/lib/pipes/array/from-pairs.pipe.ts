import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_fromPairs'
})
export class FromPairsPipe implements PipeTransform {
  public transform<T>(
    pairs: _.List<[_.PropertyName, T]> | null | undefined
  ): _.Dictionary<T> {
    return _.fromPairs(pairs);
  }
}
