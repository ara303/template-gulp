# template-gulp
![npm dependencies](https://david-dm.org/edadams/template-gulp.svg)

Example Gulp.js workflow with all the file structure you need to get started with Gulp.js and a number of the most helpful modules for a front-end developer.

This uses SCSS with Autoprefixer, minify and concat for JS, BrowserSync for automatic page refreshing, and Jekyll to generate a static site or blog, with more too (optionally).

[I've written a detailed blog article about how to install and use this if it's your first time working with Gulp](http://edadamsblog.tumblr.com/post/131510136177/getting-started-gulp-js).
    
## Prerequisites

- [Node.js and npm](http://nodejs.org)
- [Gulp.js](http://gulpjs.com)

If you want to run a static site (not required if you just want to process CSS/JS/images):

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll](http://jekyllrb.com)

If you want to publish to GitHub:

- Git, which you can get through installing [GitHub Desktop](https://desktop.github.com/) which installs `git`. 

There's an [alternate way to publish](https://github.com/edadams/template-gulp#to-surge) if you don't want to use `git`.



## Installation

If you plan to publish a site, I strongly recommend you [clone this repo](https://help.github.com/articles/cloning-a-repository/) as that will make it a breeze for you to publish to GitHub Pages later. If you have GitHub Desktop, you can just click "Clone in Desktop" down the right side of this GitHub repo page.

If you're not publishing, you can manually [download the starter files](https://github.com/edadams/template-gulp/releases).

Once you've got the project starter files, navigate to the directory where you put them. From here, install the dependencies by running: 

    npm install gulp-sass gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-concat gulp-uglify browser-sync gulp-gh-pages --save-dev 

Pay special attention to [`gulpfile.js`](https://github.com/edadams/template-gulp/blob/master/gulpfile.js), that's where all the magic happens.

### Without Jekyll

If you don't want to use Jekyll as a part of this (so if you only want to compile your SCSS and other assets), you need to comment out the Jekyll parts of the `gulpfile.js` (it's annotated), and delete `_config.yml`, `src/_includes`, `src/_layouts` and `src/index.md`. 

Since Jekyll is what generates the HTML files, you'll need to manually add an `index.html` file to `dist`. Make sure it has the following in the `<head>`:

````html
<link rel="stylesheet" href="css/application.css">
<script src="js/application.js"></script>
````
    


## Usage

While in the project root, start the server by running:

    gulp



## Deploying 
    
### To GitHub Pages

`git` is required for this.

From the project root, run:

    gulp deploy

Because you cloned this repo, your project root has all the necessary files so that the `deploy` command can automatically create the `gh-pages` branch (on the first time you run the command) and publish the contents of your `dist` folder there. Your site will be live a few minutes later at `[github-username].github.io/[repo-name]`. GitHub will email you when the site is published. You can also [use your own domain name for free](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).


### To [Surge](https://surge.sh/)

Surge is my preferred way to deploy static sites. It's free, offers all the same features as GitHub Pages, and doesn't require your code be open which makes it ideal for client sites. It also doesn't require `git`.

It isn't included in the dependencies of this project by default, so you'll need to [install it](https://surge.sh/help/getting-started-with-surge). Once installed, run:

    surge dist

(Typing `dist` tells it to just upload your compiled site, otherwise it'll upload everything.) It'll help you sign up for a Surge account (email & password) from the command line, and by default deploys to a `.surge.sh` subdomain, but much like with GitHub Pages you can [use your own domain name for free](https://surge.sh/help/adding-a-custom-domain name).


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
    package.json
