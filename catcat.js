"use strict";

var strToCopy = "";

function copyAddressAndTitle() {
  strToCopy = document.title + " " + document.baseURI;
  document.execCommand("copy");
}

function oncopy(event) {
  if (!strToCopy) {
    return;
  }

  // Hide the event from the page to prevent tampering.
  event.stopImmediatePropagation();

  // Overwrite the clipboard content.
  event.preventDefault();
  event.clipboardData.setData("text", strToCopy);
  strToCopy = "";
}

document.addEventListener("copy", oncopy, true);
