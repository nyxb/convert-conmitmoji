<p align="center">
<img src="https://raw.githubusercontent.com/nyxb/convert-conmitmoji/main/.github/assets/convert_conmitmoji_light.png#gh-light-mode-only">
<img src="https://raw.githubusercontent.com/nyxb/convert-conmitmoji/main/.github/assets/convert_conmitmoji_dark.png#gh-dark-mode-only">
</p>

<p>
  <a href="https://www.npmjs.com/package/@nyxb/convert-conmitmoji"><img src="https://img.shields.io/npm/v/@nyxb/convert-conmitmoji.svg?style=flat&colorA=18181B&colorB=14F195" alt="Version"></a>
  <a href="https://www.paka.dev/npm/@nyxb/convert-conmitmoji"><img src="https://www.paka.dev/badges/v0/cute.svg" alt="Docs"></a>
  <a href="https://www.npmjs.com/package/@nyxb/convert-conmitmoji"><img src="https://img.shields.io/npm/dm/@nyxb/convert-conmitmoji.svg?style=flat&colorA=18181B&colorB=14F195" alt="Downloads"></a>
  <a href="https://github.com/nyxb/convert-conmitmoji/blob/main/LICENSE"><img src="https://img.shields.io/github/license/nyxb/convert-conmitmoji.svg?style=flat&colorA=18181B&colorB=14F195" alt="License"></a>
 </p>

## Easily Transform Conmitmoji! 🚀

Want to effortlessly convert Commitmojis in your texts? Look no further! Introducing the convert-commitmoji package, which makes the conversion process a breeze. Just follow these simple installation and usage instructions.

### Installation 🔧
Choose your preferred package manager:

pnpm:

```bash
pnpm add @nyxb/convert-conmitmoji
```

npm:
```bash	
npm install @nyxb/convert-conmitmoji
```

yarn:
```bash
yarn add @nyxb/convert-conmitmoji
```

or use easily always the right package manager with [@nyxb/nyxi](https:github.com/nyxb/nyxi)

## Usage 📚
`convert(content: string, withSpace?: boolean | "leading" | "trailing" | "both")`

Convert all commitmojis in a string. The withSpace parameter is set to false by default. If set to true, a trailing whitespace will be added after the converted commitmoji.

For more control, withSpace can also be set to leading for a whitespace before the string, trailing for a whitespace at the end of the string (same as true), or both to surround the string with whitespaces.

```ts
// CommonJS
const { convert } = require("convert-commitmoji");

// ESM
import { convert } from "convert-commitmoji";

convert(':arrow_up: bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** :pencil:  Updated TSDoc (xxx)', true);

--> "⬆️ bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** ✏️ Updated TSDoc (xxx)"

convert("This:art:is on:fire:!")

--> "This🎨is on🔥!"

convert("This:art:is on:fire:!", "both")

--> "This 🎨 is on 🔥 !"
```

Now you're ready to add some flair to your text with Commitmoji conversions! 🎉

## License

[MIT](./LICENSE)
