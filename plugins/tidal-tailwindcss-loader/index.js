module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',
    configurePostCss(postcssOptions) {
      // Appends new PostCSS plugin.
      postcssOptions.plugins.push(require('postcss-import'))
      postcssOptions.plugins.push(require('tailwindcss'))

      return postcssOptions;
    },
  }
}
