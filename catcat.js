"use strict";

var strToCopy = "";

function copyAddressAndTitle() {
  document.execCommand("copy");
}

function oncopy(event) {

  // Hide the event from the page to prevent tampering.
  event.stopImmediatePropagation();

  // Overwrite the clipboard content.
  event.preventDefault();
  strToCopy = document.title + " " + document.baseURI;
  event.clipboardData.setData("text", strToCopy);
  strToCopy = "";
}

document.addEventListener("copy", oncopy, true);
