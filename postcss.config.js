const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const isDev = process.env.APP_ENV === 'development';

const plugins = [presetEnv, autoprefixer];

if (!isDev) {
  plugins.push(
    cssnano({
      preset: 'default',
    }),
  );
}

module.exports = { map: true, plugins };
