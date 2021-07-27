/** @type {import("snowpack").SnowpackUserConfig } */
const config = {
  mount: {
    'src/__site__': { url: '/', static: true, resolve: false },
    'src/styles': { url: '/styles' },
    'src/scripts': { url: '/scripts' },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  alias: {
    '@app': 'src',
    node_modules: './node_modules',
  },
  optimize: {
    // bundle: true,
    // minify: true,
    // target: 'es2020',
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
  },
};

// Use the offical sass plugin in dev mode
if (process.env.NODE_ENV === 'development') {
  config.plugins.push([
    '@snowpack/plugin-sass',
    {
      native: true,
      compilerOptions: {
        loadPath: './node_modules/gorko/',
      },
    },
  ]);
} else {
  // Use custom script to pipe sass output to postcss
  config.plugins.push([
    '@snowpack/plugin-run-script',
    {
      cmd: 'sass src/styles:build/styles --load-path="./node_modules/gorko/" --no-source-map && postcss build/styles --replace --config postcss.config.js',
    },
  ]);
}

module.exports = config;
