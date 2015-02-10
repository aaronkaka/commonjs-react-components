/** @jsx React.DOM */

var React   = require('react');
var Profile = require('./Profile.jsx');

React.render(
    <Profile
        username="Aaron Kaka"
        bio="My name is Aaron. I'm here to serve."
        avatar="wired.jpg"
    />,
    document.body);
