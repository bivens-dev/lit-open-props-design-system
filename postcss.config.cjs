const postcssjitprops = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport     = require('postcss-import');
const combineSelectors  = require('postcss-combine-duplicated-selectors');

module.exports = {
  plugins: [
    postcssImport(),
    postcssjitprops({
      ...OpenProps,
      custom_selector: ':host'
    }),
    postcssPresetEnv({
      stage: 2,
      autoprefixer: true,
      features: {
        'logical-properties-and-values': true, 
        'prefers-color-scheme-query': true, 
        'custom-properties': true,
        'nesting-rules': true,
        'custom-media-queries': {importFrom: 'open-props/media'},
      }
    }),
    combineSelectors(),
  ],
}