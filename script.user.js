// ==UserScript==
// @name         Bypass Quora Login
// @namespace    https://github.com/Ray-Adams
// @version      1.0.0
// @description  Bypasses the Quora log-in overlay.
// @author       Ray Adams
// @match        *://quora.com/*
// @match        *://www.quora.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

(() => {

    'use strict';

    let styles = `
        .signup_wall_prevent_scroll {
            overflow: auto !important; /* Re-enable scrolling */
        }

        div#root {
            filter: none !important; /* Unblur content */
        }

        div._DialogSignupForm.BaseSignupForm.vertical_alignment_wrapper {
            display: none !important; /* Remove sign-up form */
        }
    `, styleSheet = document.createElement("style");

    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

})()
