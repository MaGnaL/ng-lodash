import {PipeTransform, Type} from '@angular/core';
import {IncludesPipe} from './includes.pipe';

export const COLLECTION_PIPES: Type<PipeTransform>[] = [IncludesPipe];
