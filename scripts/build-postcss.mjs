import 'zx/globals';

// Use the postcss-cli to compile relevant .pcss files
async function compilePostCSSFiles() {
  // Get all relevant PostCSS files
  const postCSSFiles = glob.globbySync(['./src/components/**/*.pcss']);

  // Compile using PostCSS
  postCSSFiles.forEach(async file => {
    const output = file.replace(/\.pcss$/, '.css');
    console.log(`[build-postcss.mjs] compiling: ${file}`);
    await $`postcss ${file} -o ${output}`;
  });
}

// Finds CSS files and converts them to valid Lit CSS Files
async function convertCSSToLitCSS() {
  // Get all relevant CSS files
  const cssFiles = glob.globbySync(['./src/components/**/*.css']);

  // Place the CSS into a valid Lit CSS file
  const cssStringToLit = (cssString) => {
    return `import {css} from 'lit';

export const styles = css\`
${cssString}
\`;
`;
  };

  // Transfer contents to a Lit CSS file
  cssFiles.forEach(async file => {
    const outputPath = file.replace(/\.css$/, '.css.ts');
    let cssFileContents;
    
    try {
      console.log(`[build-postcss.mjs] reading css file: ${file}`);
      cssFileContents = fs.readFileSync(file);
      console.log(`[build-postcss.mjs] successfully wrote: ${outputPath}`);
    } catch (err) {
      console.error(`[build-postcss.mjs] error while reading ${file}.`);
      throw err;
    }

    const litFileContents = cssStringToLit(cssFileContents);
    
    try {
      console.log(`[build-postcss.mjs] writing to: ${outputPath}`);
      fs.outputFileSync(outputPath, litFileContents);
      console.log(`[build-postcss.mjs] successfully wrote: ${outputPath}`);
    } catch (err) {
      console.error(`[build-postcss.mjs] error while writing to ${outputPath}. \n ${err}`);
    }
  });
}

async function cleanupCSSFiles(){
  // Get all relevant CSS files
  const cssFiles = glob.globbySync(['./src/components/**/*.css']);

  // Loop through each one and attempt to delete it
  cssFiles.forEach(async file => {
    try {
      fs.removeSync(file);
      console.log(`[build-postcss.mjs] Removed temporary CSS file ${file}`);
    } catch (error) {
      console.error(`[build-postcss.mjs] error while removing temporary CSS file ${file}`);
      throw error;
    }
  });
}

async function main(){
  await compilePostCSSFiles();
  await sleep(3000);
  convertCSSToLitCSS();
  cleanupCSSFiles();
}

main();