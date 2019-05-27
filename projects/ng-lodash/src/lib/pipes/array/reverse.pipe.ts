import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_reverse'
})
export class ReversePipe implements PipeTransform {
  public transform<TList extends _.List<any>>(array: TList): TList {
    return _.reverse(array);
  }
}
