import {PipeTransform, Type} from '@angular/core';
import {ChunkPipe} from './chunk.pipe';
import {CompactPipe} from './compact.pipe';
import {ConcatPipe} from './concat.pipe';
import {DifferencePipe} from './difference.pipe';

export const ARRAY_PIPES: Type<PipeTransform>[] = [
  ChunkPipe,
  CompactPipe,
  ConcatPipe,
  DifferencePipe
];
