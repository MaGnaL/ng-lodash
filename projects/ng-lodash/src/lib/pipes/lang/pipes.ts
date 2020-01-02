import {PipeTransform, Type} from '@angular/core';
import {IsEmptyPipe} from './is-empty.pipe';

export const LANG_PIPES: Type<PipeTransform>[] = [IsEmptyPipe];
