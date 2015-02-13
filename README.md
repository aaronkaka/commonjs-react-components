# CommonJS React Components

![Image](screenshot.png?raw=true "screenshot")

## Goals

A simple proof-of-concept inspired by http://simonsmith.io/writing-react-components-as-commonjs-modules/

- Use CommonJS to build and share UI components
- Abstract away the component's implementation without leakage so that it can be consumed without knowledge of a 
specific library or framework
- No component API, event everything (using vanilla JavaScript DOM eventing)
- Consumer decides DOM location, and eventing eligibility

Styled using the ubiquitous Bootstrap v3 for mobile-first responsiveness.

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
    