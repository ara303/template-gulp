# template-gulp
This is an empty template Gulp.js workflow with all the file structure you need to get started with Gulp.js and a number of it's plugins. This uses SCSS with Autoprefixer, concat and minify JS, BrowserSync for automatic page refreshing, and Jekyll to generate a static site or blog.

[I've written a detailed blog article about how to install and use this if it's your first time working with Gulp](http://blog.edada.ms/post/131510136177/getting-started-gulp-js).
    
## Prerequisites

- [Node.js and npm](http://nodejs.org)
- [Gulp.js](http://gulpjs.com)

And if you want to run a static site (not required if you just want to process CSS/JS/images). 

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll](http://jekyllrb.com)

## Installation

Downloading [the latest release](https://github.com/edadams/template-gulp/releases) or forking this repo is the fastest way to get the required file structure. Pay special attention to `gulpfile.js`.

From where you put the files, install dependencies by running: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync --save-dev 
    
## Usage

Start the server by running (from your project's root):

    gulp

## Required file structure

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
            example2.js
        scss/
            main.scss
    _config.yml
    gulpfile.js
