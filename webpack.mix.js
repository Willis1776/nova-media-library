let mix = require("laravel-mix");
require("./nova.mix");

mix
  .setPublicPath("dist")
  .js("resources/js/tool.js", "js")
  .vue({ version: 3 })
  .sass("resources/sass/tool.sass", "css")
  .options({
    processCssUrls: false,
    postCss: [require("tailwindcss"), require("autoprefixer")],
  })
  .nova("classic-o/nova-media-library");
