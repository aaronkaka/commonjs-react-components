function init() {

  // First create the event
  var myEvent1 = new CustomEvent("initCard", {
      detail: {
          targetElem: "div1",
          username: "aaron.kaka",
          bio: "This is Aaron's bio.",
          avatar: "images/avatar.png"
      }
  });

  // Trigger it!
  document.dispatchEvent(myEvent1);

  var myEvent2 = new CustomEvent("initCard", {
      detail: {
          targetElem: "div2",
          username: "joe.schmo",
          bio: "This is Joe's bio.",
          avatar: "images/wired.jpg"
      }
  });

  document.dispatchEvent(myEvent2);
}

window.onload = init;