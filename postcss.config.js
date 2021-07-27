const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const plugins = [
  presetEnv,
  autoprefixer,
  cssnano({
    preset: 'default',
  }),
];

module.exports = { map: true, plugins };
