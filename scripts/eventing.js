'use strict';

function init() {

  var eventedElementId = 'eventedElement',
      eventedElement = document.getElementById(eventedElementId);

  document.body.dispatchEvent(
    new CustomEvent('scriptinclude', {
      detail: '.container'
    })
  );

  // Data in detail objects would come from a service endpoint

  var initComponent1 = new CustomEvent('initCard', {
      detail: {
          eventedElem: eventedElementId,
          targetElem: "div1",
          username: "aaron.kaka",
          bio: "This is Aaron's bio.",
          avatar: "images/avatar.png"
      }
  });
  eventedElement.dispatchEvent(initComponent1);

  var initComponent2 = new CustomEvent('initCard', {
      detail: {
          eventedElem: eventedElementId,
          targetElem: "div2",
          username: "joe.schmo",
          bio: "This is Joe's bio.",
          avatar: "images/wired.jpg"
      }
  });
  eventedElement.dispatchEvent(initComponent2);

  var initComponent3 = new CustomEvent('initCard', {
      detail: {
          eventedElem: eventedElementId,
          targetElem: "div3",
          username: "suzie.q",
          bio: "This is Suzie's bio.",
          avatar: "images/suzieq.jpg"
      }
  });
  eventedElement.dispatchEvent(initComponent3);

  // Outside the evented group
  var initComponent4 = new CustomEvent('initCard', {
      detail: {
          // NO eventedElem
          targetElem: "div4",
          username: "outsider.card",
          bio: "This card does not belong to the evented group of cards."
          // NO avatar
      }
  });
  document.getElementById('outsider').dispatchEvent(initComponent4);

}

window.onload = init;