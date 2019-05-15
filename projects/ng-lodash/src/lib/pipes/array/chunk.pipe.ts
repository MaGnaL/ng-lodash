import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_chunk'
})
export class ChunkPipe implements PipeTransform {
  public transform(value: any[], size?: number): any[] {
    return _.chunk(value, size);
  }
}
