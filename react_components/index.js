'use strict';

// Bootstrap is being used globally
require('../css/bootstrap.min.css');

var React = require('react');
var Card  = require('./Card.js');

function cardstrap(containerClass) {

  // Convention being used is that the card components go into container-styled divs
  var containers = document.querySelectorAll(containerClass),
      container = containers.length;

  // Listen for card component initialization in each container
  while (container--) {

    document.getElementById(containers[container].id)
      .addEventListener('initCard', function (e) {

        var targetData = e.detail,
            targetElement = e.detail.targetElem;

        console.info('New Event: ' + e.type + ' for ' + targetElement);
        console.info('Custom data: ', targetData);

        React.render(
          <Card data={targetData} key={targetElement} />,
          document.getElementById(targetElement));
      });
  }

}

document.body.addEventListener('scriptinclude', function(e) {
  cardstrap(e.detail);
});

module.exports = cardstrap;