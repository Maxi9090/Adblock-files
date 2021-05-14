// ==UserScript==
// @name         Reduce padding - ign
// @namespace    UserScript
// @match        https://www.ign.com/*
// @match

// @grant        none
// @version      0.1
// @author       Maxi9090
// @description  Reduce bottom margins padding under videos.
// ==/UserScript==

var fbcai = document.querySelector("div.video-details > div.video-actions > div.feedback-container");
fbcai.style.marginBottom= "0px";
fbcai.style.marginTop = "35px";

var fbcte = document.querySelector("div.video-actions > div.feedback-container > div.feedback-content");
fbcte.setAttribute("style", "margin:25px;");

var videt = document.querySelector("main > section > div.video-details");
videt.setAttribute("style", "padding-bottom:0px;");
