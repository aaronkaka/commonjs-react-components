# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A proof-of-concept inspired by this [post](http://simonsmith.io/writing-react-components-as-commonjs-modules/).

- Use [CommonJS Modules](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch11s03.html) 
to build and share UI components
- Abstract away the component's implementation without leakage
- No component API, event all interaction
- **External styling is bundled with the component, simply using `require` statements**
- Component-specific styling is scoped to the component

External CSS is used here because that is often how we bring in styling, and it is useful to show that it need not be 
globally applied.

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

Publish your component to an npm registry; set up your project with webpack, including loaders.
    
Then in your consuming app:
 
    > npm install commonjs-react-components

Example javascript:

    var Cardstrap = require('commonjs-react-components');
    Cardstrap('.container');
    
Then you must build the required bundle you've configured:

    > webpack
