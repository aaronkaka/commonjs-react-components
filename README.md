# Goal

A simple proof-of-concept inspired by http://simonsmith.io/writing-react-components-as-commonjs-modules/

Beyond merely creating React components, however, this POC is meant to abstract away the implementation of the component
so that it can be consumed without knowledge of a specific library. Interaction with, and between, instances of the 
component is accomplished purely by means of vanilla JavaScript DOM eventing.

Styled using the ubiquitous Bootstrap v3 for mobile-first responsiveness.

# Prerequisites

Install [NodeJS](http://nodejs.org/download/). This automatically installs npm.

# Tool Chain

Once the above are squared away, you'll need to install Grunt to build:

    npm install -g grunt-cli

## Can I see the project working before I change anything?

Execute the following in sequence:

    npm install
    grunt

Once the above is complete, open a browser tab to index.html - no server required.

## Live Reload

Live reload is activated, so that any saved change to the source automatically reloads the browser page.
