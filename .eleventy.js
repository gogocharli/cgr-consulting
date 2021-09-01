// Node imports
const fs = require('fs');
const path = require('path');

// Plugins
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n/index');
const pluginSEO = require('eleventy-plugin-seo');
const seoOpts = require('./src/_data/seo.json');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform');

const isDev = process.env.APP_ENV === 'development';

// Webpack settings below
const manifestPath = path.resolve(__dirname, 'src', 'assets', 'manifest.json');

// Set the manifest as the assets link for build mode
const manifest = isDev
  ? { 'main.js': '/assets/index.js', 'main.css': '/assets/index.css' }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: 'utf-8' }));

module.exports = function (config) {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
  ]);

  // Turn off scrolling on any connected device
  config.setBrowserSyncConfig({
    ghostMode: false,
  });

  config.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en',
    },
  });

  // Add a shortcode for the bundled JS
  config.addShortcode('bundledJS', () => {
    if (!manifest['main.js']) return '';

    if (isDev) {
      return `<script src="/assets/index.js" defer></script>`;
    } else {
      return `<script src="${manifest['main.js']}" defer></script>`;
    }
  });

  // Bundled CSS - inline when in production
  config.addShortcode('bundledCSS', () => {
    if (!manifest['main.css']) return '';

    if (isDev) {
      return `<link rel="stylesheet" href="/assets/index.css" />`;
    } else {
      const pathToCSSFile = path.resolve(
        __dirname,
        'src',
        'assets',
        manifest['main.css'].split('/')[2],
      );

      const cssToInline = fs.readFileSync(pathToCSSFile, 'utf-8');
      return `<style>${cssToInline}</style>`;
    }
  });

  config.addPlugin(pluginSEO, seoOpts);

  if (!isDev) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addPassthroughCopy('src/static');
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('_redirects');
  config.addPassthroughCopy('humans.txt');

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      output: '__site__',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
