"use strict";
const {contextMenus, i18n, tabs, notifications} = browser;

const _ = i18n.getMessage;

function notify(message) {
  notifications.create("catcat-notification", {
    type: "basic",
    title: "CATCAT",
    message
  });
}

contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "catcat") {
    tabs.executeScript(tab.id, {
      code: `copyAddressAndTitle();`
    }).catch(error => {
      console.error(error);
      notify("Failed to copy the title and URL.");
    });
  }
});

contextMenus.create({
  id: "catcat",
  title: _("contextMenuItemLink"),
  contexts: ["all"]
});
