import {NgModule, PipeTransform, Type} from '@angular/core';
import {GetPipe, HasPipe, SizePipe} from './pipes';

const PIPES: Type<PipeTransform>[] = [
  HasPipe,
  GetPipe,
  SizePipe
];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class NgLodashModule {
}
