# uscc-utils

[![CI](https://github.com/ntnyq/uscc-utils/workflows/CI/badge.svg)](https://github.com/ntnyq/uscc-utils/actions)
[![NPM VERSION](https://img.shields.io/npm/v/uscc-utils.svg)](https://www.npmjs.com/package/uscc-utils)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/uscc-utils.svg)](https://www.npmjs.com/package/uscc-utils)
[![LICENSE](https://img.shields.io/github/license/ntnyq/uscc-utils.svg)](https://github.com/ntnyq/uscc-utils/blob/main/LICENSE)

> Utils about unified social credit code(统一社会信用代码工具方法).

## Install

```shell
npm i uscc-utils
```

```shell
yarn add uscc-utils
```

```shell
pnpm add uscc-utils
```

## Usage

```js
import { parseUSCC, validateUSCC } from 'uscc-utils'

const code = '91110108551385082Q' // 小米科技有限责任公司

validateUSCC(code) // true

parseUSCC(code) // { isValid: true, category: '工商', type: '企业' }
```

## API

### validateUSCC

Check if the given code match the uscc pattern.

Type definition:

```ts
function validateUSCC(code: string): boolean
```

### parseUSCC

Parse the given uscc.

Type definition:

```ts
interface ParseOptions {
  unknownCategory?: string
  unknownType?: string
}

interface ParseResult {
  isValid: boolean
  category: string
  type: string
}

function parseUSCC(code: string, options?: ParseOptions): ParseResult
```

## Credits

- [GB 32100-2015 法人和其他组织统一社会信用代码编码规则 - 维基文库](https://zh.wikisource.org/wiki/GB_32100-2015_法人和其他组织统一社会信用代码编码规则)
- [国务院关于批转发展改革委等部门法人和其他组织统一社会信用代码制度建设总体方案的通知 - 国发〔2015〕33 号](http://www.gov.cn/zhengce/content/2015-06/17/content_9858.htm)

## License

[MIT](./LICENSE) License © 2022-PRESENT [ntnyq](https://github.com/ntnyq)
