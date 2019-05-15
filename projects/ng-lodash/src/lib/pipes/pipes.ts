import { PipeTransform, Type } from '@angular/core';
import { ARRAY_PIPES } from './array/pipes';
import { OBJECT_PIPES } from './object/pipes';

export const PIPES: Type<PipeTransform>[] = [...ARRAY_PIPES, ...OBJECT_PIPES];
