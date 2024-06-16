import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

function getHtmlEntries() {
  const pagesDir = path.resolve(__dirname, 'src');
  /** @type {{[name: string]: string}} */
  const entries = {};

  // Read all files in the directory
  const files = fs.readdirSync(pagesDir, {
    recursive: true,
    encoding: 'utf-8',
  });

  // Filter out HTML files
  const htmlFiles = files.filter((file) => file.endsWith('.html'));

  // Create entries for each HTML file
  htmlFiles.forEach((file) => {
    console.log(file);
    const key =
      file
        .replace(/\.[^/.]+$/, '')
        .replace(/\\/g, '/')
        .split('/')
        .slice(0, -1)
        .join('/') || 'index';

    entries[key] = path.resolve(pagesDir, file);
  });

  return entries;
}

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
