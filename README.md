[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# ng-lodash

`ng-lodash` is a Angular library which provides pipes for lodash functions.

## 🚀 Setting Up

### Install

```npm
npm install @magnal/ng-lodash
```

### Import

```angular2
import {NgLodashModule} from '@magnal/ng-lodash';

@NgModule({
  imports: [
    NgLodashModule
  ]
})
export class FooModule {}
```

## ⚙ Usage

When the module is imported, all pipes can be used like every other pipe in Angular.

When you follow the recommendation of [angular.io](https://angular.io/guide/ngmodule-faq#sharedmodule) regarding the use of a `SharedModule` you can also import and re-export it there. Adding it to your own shared component library is of course also possible.

### Pipes

Not every lodash function has what it takes to become a Angular pipe. The following functions are implemented so far.

#### Array

| lodash function  | pipe name       |
| ---------------- | --------------- |
| `_.chunk`        | `_chunk`        |
| `_.compact`      | `_compact`      |
| `_.concat`       | `_concat`       |
| `_.difference`   | `_difference`   |
| `_.drop`         | `_drop`         |
| `_.dropRight`    | `_dropRight`    |
| `_.fill`         | `_fill`         |
| `_.first`        | `_first`        |
| `_.flatten`      | `_flatten`      |
| `_.flattenDeep`  | `_flattenDeep`  |
| `_.flattenDepth` | `_flattenDepth` |
| `_.fromPairs`    | `_fromPairs`    |
| `_.head`         | `_head`         |
| `_.indexOf`      | `_indexOf`      |
| `_.initial`      | `_initial`      |
| `_.intersection` | `_intersection` |
| `_.join`         | `_join`         |
| `_.last`         | `_last`         |
| `_.lastIndexOf`  | `_lastIndexOf`  |
| `_.nth`          | `_nth`          |
| `_.pull`         | `_pull`         |
| `_.pullAll`      | `_pullAll`      |
| `_.pullAt`       | `_pullAt`       |

#### Object

| lodash function | pipe name |
| --------------- | --------- |
| `_.get`         | `_get`    |
| `_.has`         | `_has`    |
| `_.set`         | `_set`    |

You miss a lodash function here? Feel free to create an issue for that. ❤
