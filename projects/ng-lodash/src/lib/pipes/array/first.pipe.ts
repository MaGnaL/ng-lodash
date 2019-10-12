import {Pipe} from '@angular/core';
import {HeadPipe} from './head.pipe';

@Pipe({
  name: '_first'
})
export class FirstPipe extends HeadPipe {}
