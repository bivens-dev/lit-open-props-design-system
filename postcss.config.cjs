const postcssjitprops = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport     = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport(),
    postcssjitprops(OpenProps),
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
  ],
}