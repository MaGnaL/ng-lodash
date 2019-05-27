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
import { ReversePipe } from './reverse.pipe';
import { SlicePipe } from './slice.pipe';
import { SortedIndexPipe } from './sorted-index.pipe';
import { SortedIndexOfPipe } from './sorted-index-of.pipe';
import { SortedLastIndexPipe } from './sorted-last-index.pipe';
import { SortedLastIndexOfPipe } from './sorted-last-index-of.pipe';
import { SortedUniqPipe } from './sorted-uniq.pipe';
import { TailPipe } from './tail.pipe';
import { TakePipe } from './take.pipe';
import { TakeRightPipe } from './take-right.pipe';
import { UnionPipe } from './union.pipe';
import { UniqPipe } from './uniq.pipe';
import { UnzipPipe } from './unzip.pipe';
import { WithoutPipe } from './without.pipe';
import { ZipPipe } from './zip.pipe';
import { ZipObjectPipe } from './zip-object.pipe';
import { ZipObjectDeepPipe } from './zip-object-deep.pipe';
import { XorPipe } from './xor.pipe';

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
  PullAtPipe,
  ReversePipe,
  SlicePipe,
  SortedIndexPipe,
  SortedIndexOfPipe,
  SortedLastIndexPipe,
  SortedLastIndexOfPipe,
  SortedUniqPipe,
  TailPipe,
  TakePipe,
  TakeRightPipe,
  UnionPipe,
  UniqPipe,
  UnzipPipe,
  WithoutPipe,
  XorPipe,
  ZipPipe,
  ZipObjectPipe,
  ZipObjectDeepPipe
];
