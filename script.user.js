// ==UserScript==
// @name         Ask Different in San Francisco
// @version      0.3
// @description  changes default font of SE site Ask Different to San Francisco
// @author       @IAP-Reloaded
// @match        http*://*.apple.stackexchange.com/*
// @grant        none
// ==/UserScript==

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "body { font-family: -apple-system, Helvetica Neue, Arial; }";
document.body.appendChild(css);
