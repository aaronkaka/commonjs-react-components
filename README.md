# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A proof-of-concept inspired by this [post](http://simonsmith.io/writing-react-components-as-commonjs-modules/).

- Use [CommonJS Modules](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch11s03.html) 
to build and share UI components
- Abstract away the component's implementation without leakage so that it can be consumed without knowledge of a 
specific library or framework
- No component API, event all interaction
- **External styling is bundled with the component, simply using `require` statements!**
- Update: **Component-specific styling is scoped to the component!**

External CSS is used here because that is often how we bring in styling, and it is useful to show that it need not be 
globally applied.

## Prerequisites

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

## Tool Chain

Using ~~Grunt/Browserify~~ 
[webpack](http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html):

    npm install webpack -g

### Can I see the project working before I change anything?

After cloning the repo (\*nix):

    cd commonjs-react-components
    npm install
    npm run dev

Once the above is complete, open a browser tab to **localhost:8080**. In this scenario, the _dev.card-component.js_ is 
**in-memory**!

### Live Reload

Live reload is activated, so that any saved change to the watched source automatically reloads the browser page.

### Feature Flag

The SCRIPTINCLUDE feature flag is used at build time to determine whether the component is a simple script include or 
brought in as a require-able npm module. Either way, it must be addressed in the consumer webpack config:

    var definePlugin = new webpack.DefinePlugin({
        __SCRIPTINCLUDE__: JSON.stringify(JSON.parse(process.env.BUILD_SCRIPTINCLUDE || 'false'))
    });
    
In the case of a script include for _build/dist.card-component.js_, build the minified version (\*nix):

    > BUILD_SCRIPTINCLUDE=1 webpack -p

### How do I require() it into my consuming application?

Publish your component to an npm registry; set up your project with webpack, including loaders and feature flag handler.
    
Then in your consuming app:
 
    > npm install commonjs-react-components

Example javascript:

    var Cardstrap = require('commonjs-react-components');
    Cardstrap('.container');
    
Then you must build the required bundle you've configured:

    > webpack [-p]
