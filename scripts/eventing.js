function init() {

  var eventedElem = document.getElementById('eventedElement');

  var initComponent1 = new CustomEvent('initCard', {
      detail: {
          targetElem: "div1",
          username: "aaron.kaka",
          bio: "This is Aaron's bio.",
          avatar: "images/avatar.png"
      }
  });
  eventedElem.dispatchEvent(initComponent1);

  var initComponent2 = new CustomEvent('initCard', {
      detail: {
          targetElem: "div2",
          username: "joe.schmo",
          bio: "This is Joe's bio.",
          avatar: "images/wired.jpg"
      }
  });
  eventedElem.dispatchEvent(initComponent2);
}

window.onload = init;