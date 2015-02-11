/** @jsx React.DOM */

var React   = require('react');
var Card = require('./Card.jsx');

document.getElementById('eventedElement').addEventListener('initCard', function(e) {

  console.info('Event is: ' + e.type + ' for ' + e.detail.targetElem);
  console.info('Custom data is: ', e.detail);

  React.render(
    <Card details={e.detail} />,
    document.getElementById(e.detail.targetElem));

});