const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n/index');
const pluginSEO = require('eleventy-plugin-seo');
const seoOpts = require('./src/_data/seo.json');

const htmlMinTransform = require('./src/transforms/html-min-transform');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function (config) {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
  ]);

  config.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      fr: 'en',
    },
  });

  config.addPlugin(pluginSEO, seoOpts);

  if (!isDev) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addPassthroughCopy('src/static');
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('_redirects');

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
