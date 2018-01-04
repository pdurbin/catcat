# Copy Address To Clipboard And Title (CATCAT)

Copy Address To Clipboard And Title (CATCAT) is a Firefox add-on that lets you right click on any web page and copy its title and URL into your clipboard.

Installation: Until I figure out how to distribute this add-on properly, you can clone this git repo, type "about:debugging" in the Firefox address bar, click "Load Temporary Add-on", and open the `manifest.json` file. You'll be able to play with the add-on until you restart Firefox.

Why would you want to use this add-on? While there are plenty of URLs that provide enough of a "slug" to understand the content of the URL, there are many examples of URLs that are completely opaque, containing only numbers, such as Twitter posts and GitHub issues. With CATCAT, you can send someone a meaningful title along with a URL.

CATCAT is a partial replacement for CoLT, which does not run on Firefox 57+ per https://github.com/jgbishop/colt/issues/16

CATCAT was heavily influenced by the "Copy Link Text" add-on at https://github.com/def00111/copy-link-text

The following tutorial was very helpful in gaining a basic understanding of how to create a Firefox add-on: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension

The CATCAT icon was created by Naomi Durbin.
