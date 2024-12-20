// ==UserScript==
// @name         GitHub Releases to Downloads for people that aren't nerds
// @namespace    https://github.com/HaroldPetersInskipp
// @version      0.1.2
// @homepageURL  https://github.com/HaroldPetersInskipp/Releases-To-Downloads-For-People-That-Arent-Nerds
// @supportURL   https://github.com/HaroldPetersInskipp/Releases-To-Downloads-For-People-That-Arent-Nerds/issues
// @description  Changes the "Releases" link on GitHub pages to say "Downloads"
// @author       Inskipp
// @copyright    2024+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT
// @match        https://github.com/*
// @grant        none
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/Releases-To-Downloads-For-People-That-Arent-Nerds/main/icon.png
// ==/UserScript==

(function() {
    'use strict';

    // Function to replace text in a node
    function replaceText(node) {
        node.textContent = node.textContent.replace(/Releases/g, 'Downloads');
    }

    // Find all elements and text nodes containing "Releases"
    const textNodes = document.evaluate("//text()[contains(., 'Releases')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    // Replace "Releases" with "Downloads"
    for (let i = 0; i < textNodes.snapshotLength; i++) {
        let currentNode = textNodes.snapshotItem(i);
        replaceText(currentNode);
    }
})();
