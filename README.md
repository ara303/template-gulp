# template-gulp
This is an empty template Gulp.js workflow with all the file structure you need to get started with Gulp.js and a number of it's plugins. This uses SCSS with Autoprefixer, concat and minify JS, BrowserSync for automatic page refreshing, and Jekyll to generate a static site or blog.

[I've written a detailed blog article about how to install and use this if it's your first time working with Gulp](http://blog.edada.ms/post/131510136177/getting-started-gulp-js).
    
## Prerequisites

- [Node.js and npm](http://nodejs.org)
- [Gulp.js](http://gulpjs.com)

And if you want to run a static site (not required if you just want to process CSS/JS/images):

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll](http://jekyllrb.com)



## Installation

Downloading [the latest release](https://github.com/edadams/template-gulp/releases) or forking this repo is the fastest way to get the required file structure. Pay special attention to [`gulpfile.js`](https://github.com/edadams/template-gulp/blob/master/gulpfile.js).

From where you put the files, install dependencies by running: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync gulp-gh-pages --save-dev 

### Running without Jekyll

If you don't want to use Jekyll as a part of this (i.e., if you just want this to compile your SCSS and stuff, you'll want to comment out the Jekyll parts of the `gulpfile.js` (annotated), and  delete `_config.yml`, `src/_includes`, `src/_layouts` and `src/index.md`. 

In order to test your output, you'll want to create a file in `dist` called `index.html` and make sure it has the following in the `<head>`:

    <link rel="stylsheet" href="css/application.css">
    <script src="js/application.js"></script>

You need to do that so BrowserSync can automatically update those files when they change, and so that you can test your code.

    

## Usage

Start the server by running (from your project's root):

    gulp



## Deploying 
    
### To GitHub Pages

Make sure you're working from a `git` repository (if you've cloned this repo, you will be), and the repo has [a `gh-pages` branch](https://help.github.com/articles/creating-project-pages-manually/).

From the project root, type:

    gulp deploy

### To [Surge](https://surge.sh/)

Surge is my personal favoured way of deploying static sites, it's free and you can use your own domain name (you only need to pay if you want SSL), you also don't need to have your code open source which may be preferable for client sites. It's super easy to use, [you only need to install the Gulp plugin](https://surge.sh/help/getting-started-with-surge).

    surge



## Base file structure

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
        index.md
    _config.yml
    gulpfile.js
