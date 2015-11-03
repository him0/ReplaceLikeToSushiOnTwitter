// ==UserScript==
// @name         ReplaceLikeToSushiOnTwitter
// @namespace    http://him0.net
// @version      0.1
// @description  すき を すし にします。
// @author       him0
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

addEventListener("load", function() {

    favs = $(".favorited .ProfileTweet-action--favorite .HeartAnimation");
    favs.css("background", "url(https://pbs.twimg.com/media/CS5iYppUEAE_eUV.png:large)");
    favs.css("background-position-x", "101%");
    favs.css("background-position-y", "50%");
});
