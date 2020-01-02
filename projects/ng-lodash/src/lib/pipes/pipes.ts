import {PipeTransform, Type} from '@angular/core';
import {ARRAY_PIPES} from './array/pipes';
import {OBJECT_PIPES} from './object/pipes';
import {LANG_PIPES} from './lang/pipes';

export const PIPES: Type<PipeTransform>[] = [...ARRAY_PIPES, ...LANG_PIPES, ...OBJECT_PIPES];
