# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A proof-of-concept inspired by this [post](http://simonsmith.io/writing-react-components-as-commonjs-modules/).

- Use [CommonJS Modules](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch11s03.html) 
to build and share UI components
- Abstract away the component's implementation without leakage so that it can be consumed without knowledge of a 
specific library or framework
- No component API, event all interaction
- **All styling is bundled with the component, simply using `require()` statements!**

## Prerequisites

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

## Tool Chain

Using ~~Grunt/Browserify~~ 
[webpack](http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html):


    npm install webpack -g 

### Can I see the project working before I change anything?

After cloning the repo:

    cd commonjs-react-components
    npm install
    npm run dev

Once the above is complete, open a browser tab to localhost:8080. In this scenario, the _dev.card-component.js_ is 
**in-memory**!

### Live Reload

Live reload is activated, so that any saved change to the watched source automatically reloads the browser page.

### How do I create the minified distribution version?

    webpack -p
    
Then you can script include the _build/dist.card-component.js_ in your consuming markup. 

### How do I require() it into my consuming application?

Publish your component to an npm registry, set up your project with webpack and necessary plugins, and npm install it. 

Example usage:

    var Cardstrap = require('commonjs-react-components');
    Cardstrap('.container');
    