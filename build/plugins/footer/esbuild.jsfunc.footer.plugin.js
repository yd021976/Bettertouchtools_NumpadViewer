import { readFileSync, writeFileSync } from 'fs';
import { findFilesRecursively } from './utilities.js';

/**
 * EsBuild plugin to add any *footer*.js files to the end of the bundle so those function can be directly called. They will not be in the "bundle" generated by esbuild
 * The *footer*.js files should contains function to be called within BTT directly. use __BTT_GLOBAL_VAR__ to access esbuild bundle properties, functions, objects, classes etc.
 *  
 * @param {*} param0 
 * @returns 
 */
export const footerPlugin = ({ srcDir = 'src', replacements = {} } = {}) => ({
  name: 'footerPlugin',
  setup(build) {
    console.log(`Using source directory for footer files: ${srcDir}`);

    build.onEnd((result) => {
      try {
        const files = findFilesRecursively(srcDir, /^footer.*\.js$/);
        const footerContents = [];
        for (const file of files) {
          try {
            let content = readFileSync(file, 'utf8');
            let lines = content.split('\n');
            for (var line of lines) {
              // Optionally apply replacements to footer files
              for (const [from, to] of Object.entries(replacements)) {
                const isComment = line.trimStart();
                // Do not replace in comments
                if (!(/^(\/\/|\/\*|\*)/.test(isComment))) {
                  line = line.replaceAll(from, to);
                }
                footerContents.push(line);
              }
            }
          } catch (err) {
            console.error(`Error reading file ${file}:`, err);
          }
        }
        if (footerContents.length === 0) {
          console.warn(`No files matching "footer*.js" found in ${srcDir} or its subdirectories.`);
        }

        const outputFiles = result.outputFiles || [];
        if (outputFiles.length === 0) {
          console.warn('No output files found in result.outputFiles. Ensure write: false is set.');
          return;
        }
        for (const file of outputFiles) {
          if (file.path.endsWith('.js')) {
            const originalContent = file.text;
            const combinedFooter = footerContents.join('\n');
            const modifiedContent = originalContent + (combinedFooter ? '\n' + combinedFooter : '');
            file.contents = new TextEncoder().encode(modifiedContent);
            try {
              writeFileSync(file.path, modifiedContent, 'utf8');
              console.log(`Wrote modified file: ${file.path}`);
            } catch (err) {
              console.error(`Error writing file ${file.path}:`, err);
            }
          }
        }
      } catch (err) {
        console.error('Error in footerPlugin:', err);
      }
    });
  },
});