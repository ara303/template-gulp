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

If you plan to publish a site, I recommend you clone this GitHub repo because that'll make it easier for you to publish to GitHub Pages later. If you're not publishing, you need to manually [download the required files](https://github.com/edadams/template-gulp/releases).

Pay special attention to [`gulpfile.js`](https://github.com/edadams/template-gulp/blob/master/gulpfile.js), that's where all the magic happens.

From your project's root directory, install the dependencies by running: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync gulp-gh-pages --save-dev 

All future commands will be run from the project root, so remember to `cd` back there to run any further commands.

### Without Jekyll

If you don't want to use Jekyll as a part of this (i.e., if you just want this to compile your SCSS and other assets), you need to comment out the Jekyll parts of the `gulpfile.js` (it's annotated), and delete `_config.yml`, `src/_includes`, `src/_layouts` and `src/index.md`. 

Since Jekyll is what generates the HTML, you'll need to manually add an `index.html` file to `dist`. Make sure it has the following in the `<head>`:

    <link rel="stylsheet" href="css/application.css">
    <script src="js/application.js"></script>

    

## Usage

While in the project root, start the server by running:

    gulp



## Deploying 
    
### To GitHub Pages

If you cloned this GitHub repository, type:

    gulp deploy

Your site will be live a few minutes after at `[your-github-name].github.io/[your-project-name]`. GitHub will email you when the site is published.

If you downloaded the files manually, your project isn't a GitHub repo yet. You need to [create a repo](https://help.github.com/articles/create-a-repo/), then [clone it](https://help.github.com/articles/cloning-a-repository/). You might feel more comfortable using [GitHub Desktop](https://desktop.github.com/) to do the above, just make sure to clone your new repo into the project root you've made.

Once you've done that, then you can type the above command and it'll make a `gh-pages` branch.


### To [Surge](https://surge.sh/)

Surge is my preferred way to deploy static sites. It's free, doesn't require `git`, and doesn't require your code be open which makes it ideal for client sites.

It isn't included in the dependencies of this project by default, so you'll need to [install it](https://surge.sh/help/getting-started-with-surge). Once installed,type the following from the project root:

    surge

It'll help you sign up for a Surge account (email & password) from the command line, and by default deploys to a `*.surge.sh` subdomain, but much like with GitHub Pages you can [use your own domain name for free](https://surge.sh/help/adding-a-custom-domain name).


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
