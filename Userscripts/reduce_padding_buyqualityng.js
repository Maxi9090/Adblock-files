// ==UserScript==
// @name         Reduce padding - buyqualityng
// @namespace    UserScript
// @match        https://www.buyqualityng.com/*
// @grant        none
// @version      0.1
// @author       Maxi9090
// @description  Reduce bottom margins padding under videos.
// ==/UserScript==

var top = document.querySelector("div.row > div.columns > div.title");
top.style.padding = "0px";
top.style.paddingTop = "120px";
