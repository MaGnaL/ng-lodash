import { PipeTransform, Type } from '@angular/core';
import { ChunkPipe } from './chunk.pipe';
import { CompactPipe } from './compact.pipe';
import { ConcatPipe } from './concat.pipe';
import { DifferencePipe } from './difference.pipe';
import { DropPipe } from './drop.pipe';
import { DropRightPipe } from './drop-right.pipe';
import { FillPipe } from './fill.pipe';
import { FlattenPipe } from './flatten.pipe';
import { FlattenDeepPipe } from './flatten-deep.pipe';
import { FlattenDepthPipe } from './flatten-depth.pipe';
import { FromPairsPipe } from './from-pairs.pipe';
import { HeadPipe } from './head.pipe';
import { FirstPipe } from './first.pipe';
import { IndexOfPipe } from './index-of.pipe';
import { InitialPipe } from './initial.pipe';
import { IntersectionPipe } from './intersection.pipe';
import { JoinPipe } from './join.pipe';
import { LastPipe } from './last.pipe';
import { LastIndexOfPipe } from './last-index-of.pipe';
import { NthPipe } from './nth.pipe';
import { PullPipe } from './pull.pipe';
import { PullAllPipe } from './pull-all.pipe';
import { PullAtPipe } from './pull-at.pipe';

export const ARRAY_PIPES: Type<PipeTransform>[] = [
  ChunkPipe,
  CompactPipe,
  ConcatPipe,
  DifferencePipe,
  DropPipe,
  DropRightPipe,
  FillPipe,
  FirstPipe,
  FlattenPipe,
  FlattenDeepPipe,
  FlattenDepthPipe,
  FromPairsPipe,
  HeadPipe,
  IndexOfPipe,
  InitialPipe,
  IntersectionPipe,
  JoinPipe,
  LastPipe,
  LastIndexOfPipe,
  NthPipe,
  PullPipe,
  PullAllPipe,
  PullAtPipe
];
