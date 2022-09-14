const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const {writeFile} = require('fs/promises');
const glob = require('fast-glob');

(async () => {
  const entries = await glob('src/components/**/*.styles.css');

  const cssToLitCss = (cssString) => {
    return `import {css} from 'lit';export const styles = css\`${cssString}\`;`;
  };

  const promises = [];

  for (const entry of entries) {
    console.log(`[postcss.cjs] compiling: ${entry}`);
    const processor = postcss([autoprefixer]).process(entry).then(result => {
      console.log(result.css)
    });

    const result = processor.parse(entry).toResult();
    const output = entry.replace(/\.styles\.css$/, '.styles.css.ts');
    console.log(`[postcss.cjs] writing to: ${output}`);
    const writePromise = writeFile(output, cssToLitCss(result.css)).then(
      () => {
        console.log(`[postcss.cjs] wrote: ${output}`);
      }
    );
    promises.push(writePromise);
  }

  await Promise.all(promises);
})();
