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

If you plan to publish a site, I recommend you fork and pull this GitHub repo because that'll make it easier for you to publish to GitHub Pages later. If you're not publishing, you can [download the required files](https://github.com/edadams/template-gulp/releases) instead.

Pay special attention to [`gulpfile.js`](https://github.com/edadams/template-gulp/blob/master/gulpfile.js), that's where all the magic happens.

From your project's root directory, install the dependencies by running: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync gulp-gh-pages --save-dev 

### Without Jekyll

If you don't want to use Jekyll as a part of this (i.e., if you just want this to compile your SCSS and other assets), you need to comment out the Jekyll parts of the `gulpfile.js` (annotated), and  delete `_config.yml`, `src/_includes`, `src/_layouts` and `src/index.md`. 

Since Jekyll is what generates the HTML, you'll need to manually add an `index.html` file to `dist`. Make sure it has the following in the `<head>`:

    <link rel="stylsheet" href="css/application.css">
    <script src="js/application.js"></script>

    

## Usage

From the project root, start the server by running:

    gulp

You can also type `gulp serve`, but at the bottom 


## Deploying 
    
### To GitHub Pages

If you've cloned from this GitHub repository, all you need to do is (if you've cloned this repo, you will be), and the repo has [a `gh-pages` branch](https://help.github.com/articles/creating-project-pages-manually/).

From the project root, type:

    gulp deploy

### To [Surge](https://surge.sh/)

Surge is my preferred way to deploy static sites. It's free and you can use your own domain name (you only need to pay if you want SSL). You also don't need to have your code open source which may be preferable for client sites.

[Install and configure Surge](https://surge.sh/help/getting-started-with-surge), then from the project root, type:

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
