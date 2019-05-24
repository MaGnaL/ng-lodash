import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_chunk'
})
export class ChunkPipe implements PipeTransform {
  public transform<T>(
    array: _.List<T> | null | undefined,
    size?: number
  ): T[][] {
    return _.chunk(array, size);
  }
}
