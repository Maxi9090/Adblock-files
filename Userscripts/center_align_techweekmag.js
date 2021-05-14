// ==UserScript==
// @name         Center align - techweekmag
// @namespace    UserScript
// @match        https://www.techweekmag.com/*
// @grant        none
// @version      0.1
// @author       Maxi9090
// @description  Disable forced left view.
// ==/UserScript==

var fix = document.querySelector("body > div.site");
fix.setAttribute("style", "float:none;");
