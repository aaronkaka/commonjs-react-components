'use strict';

// Bootstrap is being used globally
require('../css/bootstrap.min.css');

var React = require('react');
var Card  = require('./Card.js');

function cardstrap(containerClass) {

  // Convention being used is that the card components go into container-styled divs
  var containerElements = document.querySelectorAll(containerClass);

  // Listen for card component initialization in each container-styled div
  for (var i = 0, max = containerElements.length; i < max; i++) {

    document.getElementById(containerElements[i].id).addEventListener('initCard', function (e) {

      var targetElement = e.detail.targetElem;

      console.info('New Event: ' + e.type + ' for ' + targetElement);
      console.info('Custom data: ', e.detail);

      React.render(
        <Card data={e.detail} key={targetElement} />,
        document.getElementById(targetElement));

    });
  }
}

document.body.addEventListener('scriptinclude', function(e) {
  cardstrap(e.detail);
});

module.exports = cardstrap;