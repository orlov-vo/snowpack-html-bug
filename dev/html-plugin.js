
module.exports = function htmlPlugin(_snowpackConfig, _pluginOptions) {
    return {
      name: 'html-plugin',
      resolve: {
        input: ['.h1'],
        output: ['.html', '.css'],
      },
      async load() {
        return {
          '.html': { code: '<h1>Hello world</h1>' },
          '.css': { code: '.h1 { color: red }' },
        }
      },
    }
  }
  