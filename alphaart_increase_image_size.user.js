// ==UserScript==
// @name         alphaart_increase_image_size
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  increasing the size of preview images in the activity feed of alpha.art
// @author       nuqz#8888
// @match        *alpha.art/collection/*/activity
// @icon         https://www.google.com/s2/favicons?domain=alpha.art
// @grant        GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `
 .bg-gray-100 {
  height: 100px !important;
  width: 200px !important;
  }
` );
