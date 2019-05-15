import { PipeTransform, Type } from '@angular/core';
import { GetPipe } from './get.pipe';
import { HasPipe } from './has.pipe';
import { SizePipe } from './size.pipe';

export const OBJECT_PIPES: Type<PipeTransform>[] = [GetPipe, HasPipe, SizePipe];
