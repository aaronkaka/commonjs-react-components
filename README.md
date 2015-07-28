# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A proof-of-concept inspired by this [post](http://simonsmith.io/writing-react-components-as-commonjs-modules/).

- Use [CommonJS Modules](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch11s03.html) 
to build and share responsive UI components
- Abstract away the component's implementation without leakage
- No component API, event all interaction
- **External styling is bundled with the component, simply using `require` statements**
- Component-specific styling is scoped to the component

The last one is the trick; at present I resorted to applying css selectors until there is a better (and practical) solution.

## Tool Chain

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

Make the webpack command available:

    npm install webpack -g

## Playtime

### Can I see the project working before I change anything?

After cloning the repo:

    cd commonjs-react-components
    npm install
    npm run dev

Once the above is complete, open a browser tab to **localhost:8080**.

### Live Reload

Hot module replacement is activated, so that any saved change to the watched source automatically reloads the browser page.

### Test

The project is wired to unit test with the Jest framework.

    npm test

## Consume

The card component is built for use with Bootstrap v3.

### Script Include

In the case of a script include for _build/dist.card-component.js_, build the minified version:

    > webpack -p
    
In the consuming app, event the script include target container:

    document.body.dispatchEvent(
        new CustomEvent('scriptinclude', {
            detail: '.container'
        })
    );

### How do I require() it into my consuming application?

Install the published component from your favorite npm registry:
 
    > npm i commonjs-react-components --save

Example javascript:

    var Cardstrap = require('commonjs-react-components');
    Cardstrap('.container');
    
Then build the required bundle with webpack, similar to this webpack.config.js:

    module.exports = {
      entry: ['./eventing.js'],
      output: {
        path: './',
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'jsx-loader' },
          { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
      }
    };
