# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A simple proof-of-concept inspired by http://simonsmith.io/writing-react-components-as-commonjs-modules/

- Use [CommonJS Modules](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch11s03.html) to build and share UI components
- Abstract away the component's implementation without leakage so that it can be consumed without knowledge of a 
specific library or framework
- No component API, event all interaction

Utilizes vanilla JavaScript DOM eventing. Styled using the ubiquitous Bootstrap v3 for mobile-first responsiveness.

## Prerequisites

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

## Tool Chain

Once the above are squared away, you'll need to install Grunt to build:

    npm install -g grunt-cli

### Can I see the project working before I change anything?

Execute the following in sequence:

    npm install
    grunt

Once the above is complete, open a browser tab to index.html - no server required.

### Live Reload

Live reload is activated, so that any saved change to the source automatically reloads the browser page.

    grunt watch
    