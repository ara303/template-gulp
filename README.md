# template-gulp
This is an empty template Gulp.js workflow with all the file structure you need to get started with Gulp.js and a number of it's plugins. This uses SCSS with Autoprefixer, concat and minify JS, BrowserSync for automatic page refreshing, and Jekyll to generate a static site or blog.

[I've written a detailed blog article about how to install and use this if it's your first time working with Gulp](http://blog.edada.ms/post/131510136177/getting-started-gulp-js).
    
## Prerequisites

- Node.js
- npm
- Gulp.js
- Ruby
- Jekyll

### File structure

This is the required file structure, if you want to make it for yourself.

    dist/
        css/
            application.css
        js/
            application.js
        img/
            example.png
        index.html
    src/
        _includes/
            head.html
        _layouts/
            default.html
        img/
            example.png
        js/
            example1.js
            example2.jps
        scss/
            main.scss
    _config.yml
    gulpfile.js

## How to install

Download [the latest release](https://github.com/edadams/template-gulp/releases) to get the required file structure, or you can just fork this repo. Pay special attention to `gulpfile.js`.

From whereever you put the files, install dependencies: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync --save-dev 

That's it. To start running the server and work on the site, simply run:

    gulp
