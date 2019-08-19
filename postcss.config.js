let tailwindcss = require('tailwindcss')
let purgecss = require('@fullhuman/postcss-purgecss');
let cssnano = require('cssnano');
let autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./src/**/*.pug'],
    }),
    autoprefixer
  ]
}