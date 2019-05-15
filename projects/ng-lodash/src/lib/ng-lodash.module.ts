import {NgModule} from '@angular/core';
import {PIPES} from './pipes/pipes';

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class NgLodashModule {
}
