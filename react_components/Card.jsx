/** @jsx React.DOM */

var React   = require('react');
var Profile = require('./Profile.jsx');

document.addEventListener("initCard", function(e) {

  console.info("Event is: ", e);
  console.info("Custom data is: ", e.detail);

  React.render(
    <Profile
        username={e.detail.username}
        bio={e.detail.bio}
        avatar={e.detail.avatar}
    />,
    document.getElementById(e.detail.targetElem));

});