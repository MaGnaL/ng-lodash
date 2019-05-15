import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: '_get'
})
export class GetPipe implements PipeTransform {
  public transform<TObject extends object, TKey extends keyof TObject>(
    object: TObject,
    path: TKey | [TKey]
  ): TObject[TKey];

  public transform<TObject extends object, TKey extends keyof TObject>(
    object: TObject | null | undefined,
    path: TKey | [TKey]
  ): TObject[TKey] | undefined;

  public transform<
    TObject extends object,
    TKey extends keyof TObject,
    TDefault
  >(
    object: TObject | null | undefined,
    path: TKey | [TKey],
    defaultValue: TDefault
  ): Exclude<TObject[TKey], undefined> | TDefault;

  public transform<T>(object: _.NumericDictionary<T>, path: number): T;

  public transform<T>(
    object: _.NumericDictionary<T> | null | undefined,
    path: number
  ): T | undefined;

  public transform<T, TDefault>(
    object: _.NumericDictionary<T> | null | undefined,
    path: number,
    defaultValue: TDefault
  ): T | TDefault;

  public transform<TDefault>(
    object: null | undefined,
    path: _.PropertyPath,
    defaultValue: TDefault
  ): TDefault;

  public transform(object: null | undefined, path: _.PropertyPath): undefined;

  public transform(object: any, path: _.PropertyPath, defaultValue?: any): any {
    return _.get(object, path, defaultValue);
  }
}
