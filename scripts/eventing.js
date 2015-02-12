function init() {

  var eventedElementId = 'eventedElement',
      eventedElement = document.getElementById(eventedElementId);

  // Data in detail object would come from a service endpoint

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
}

window.onload = init;