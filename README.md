## About

A starter repo loaded with some my favorite tools, like Angular, Firebase, Bootstrap, and FontAwesome.

The build process relies on a series of npm scripts, instead of Grunt or Gulp.

To use, simply clone and `npm install`.

## The Build Process

If you're wondering why I chose to go with npm scripts, here are a few articles I found both helpful and convincing:

[Why npm scripts?](https://css-tricks.com/why-npm-scripts/) by Damon Bauer

[Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.hf3w3qkb8) by Cory House

[How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) by Keith Cirkel

### Key Players

**clean**
>Uses `rimraf` to wipe out the `build` folder

**autoprefixer** & **scss**
>Uses `postcss` and `node-sass` to compile all `.scss` files inside `src`

**pug**
>Uses `pug-cli` to compile all `.pug` files inside `src`

**uglify**
>Uses `uglify-js` to mangle all `.js` files inside `src`

**img**
>Uses `imagemin-cli` to minify all images inside `src`

**serve**
>Uses `browser-sync` to start a local server and inject changes

**watch:js** & **watch:scss** & **watch:pug**
>Use `onchange` to watch `.js`, `.scss`, and `.pug` files, and update the `build` folder accordingly

**watch:all**
>Uses `parallelshell` to run `serve` and three `watch` scripts simultaneously
