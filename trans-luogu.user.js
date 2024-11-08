// ==UserScript==
// @name         Trans Luogu
// @version      1.0
// @description  将洛谷的钩子变为蓝粉白
// @author       RainPPR
// @license      MIT
// @run-at       document-end
// @match        *://*.luogu.com.cn/*
// @match        *://*.luogu.com/*
// @match        *://*.luogu.org/*
// @exclude      *://ti.luogu.com.cn/*
// @exclude      *://class.luogu.com.cn/*
// @connect      *
// @updateURL    https://github.com/RainPPR/trans-luogu/raw/refs/heads/main/trans-luogu.user.js
// @downloadURL  https://github.com/RainPPR/trans-luogu/raw/refs/heads/main/trans-luogu.user.js
// @supportURL   https://github.com/RainPPR/trans-luogu
// @homepageURL  https://github.com/RainPPR/trans-luogu
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogLTNweDsiPjxkZWZzPjxjbGlwUGF0aCBpZD0ibXlDbGlwIj48cGF0aCBkPSJNMTYgOEMxNiA2Ljg0Mzc1IDE1LjI1IDUuODQzNzUgMTQuMTg3NSA1LjQzNzVDMTQuNjU2MiA0LjQzNzUgMTQuNDY4OCAzLjE4NzUgMTMuNjU2MiAyLjM0Mzc1QzEyLjgxMjUgMS41MzEyNSAxMS41NjI1IDEuMzQzNzUgMTAuNTYyNSAxLjgxMjVDMTAuMTU2MiAwLjc1IDkuMTU2MjUgMCA4IDBDNi44MTI1IDAgNS44MTI1IDAuNzUgNS40MDYyNSAxLjgxMjVDNC40MDYyNSAxLjM0Mzc1IDMuMTU2MjUgMS41MzEyNSAyLjM0Mzc1IDIuMzQzNzVDMS41IDMuMTg3NSAxLjMxMjUgNC40Mzc1IDEuNzgxMjUgNS40Mzc1QzAuNzE4NzUgNS44NDM3NSAwIDYuODQzNzUgMCA4QzAgOS4xODc1IDAuNzE4NzUgMTAuMTg3NSAxLjc4MTI1IDEwLjU5MzhDMS4zMTI1IDExLjU5MzggMS41IDEyLjg0MzggMi4zNDM3NSAxMy42NTYyQzMuMTU2MjUgMTQuNSA0LjQwNjI1IDE0LjY4NzUgNS40MDYyNSAxNC4yMTg4QzUuODEyNSAxNS4yODEyIDYuODEyNSAxNiA4IDE2QzkuMTU2MjUgMTYgMTAuMTU2MiAxNS4yODEyIDEwLjU2MjUgMTQuMjE4OEMxMS41OTM4IDE0LjY4NzUgMTIuODEyNSAxNC41IDEzLjY1NjIgMTMuNjU2MkMxNC40Njg4IDEyLjg0MzggMTQuNjU2MiAxMS41OTM4IDE0LjE4NzUgMTAuNTkzOEMxNS4yNSAxMC4xODc1IDE2IDkuMTg3NSAxNiA4Wk0xMS40Njg4IDYuNjI1TDcuMzc1IDEwLjY4NzVDNy4yMTg3NSAxMC44NDM4IDcgMTAuODEyNSA2Ljg3NSAxMC42ODc1TDQuNSA4LjMxMjVDNC4zNzUgOC4xODc1IDQuMzc1IDcuOTY4NzUgNC41IDcuODEyNUw1LjMxMjUgN0M1LjQ2ODc1IDYuODc1IDUuNjg3NSA2Ljg3NSA1LjgxMjUgNy4wMzEyNUw3LjEyNSA4LjM0Mzc1TDEwLjE1NjIgNS4zNDM3NUMxMC4zMTI1IDUuMTg3NSAxMC41MzEyIDUuMTg3NSAxMC42NTYyIDUuMzQzNzVMMTEuNDY4OCA2LjE1NjI1QzExLjU5MzggNi4yODEyNSAxMS41OTM4IDYuNSAxMS40Njg4IDYuNjI1WiI+PC9wYXRoPjwvY2xpcFBhdGg+PC9kZWZzPjxyZWN0IGZpbGw9IiM1QkNFRkEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgY2xpcC1wYXRoPSJ1cmwoI215Q2xpcCkiIC8+PHJlY3QgZmlsbD0iI0Y1QTlCOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjkuNiIgeT0iMy4yIiBjbGlwLXBhdGg9InVybCgjbXlDbGlwKSIgLz48cmVjdCBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMTYiIGhlaWdodD0iMy4yIiB5PSI2LjQiIGNsaXAtcGF0aD0idXJsKCNteUNsaXApIiAvPjwvc3ZnPg==
// ==/UserScript==

// TODO: 鱼板钩

(function() {
    'use strict';

    // 蓝粉白钩
    const img1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="margin-bottom: -3px;"><defs><clipPath id="myClip"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></clipPath></defs><rect fill="#5BCEFA" width="16" height="16" clip-path="url(#myClip)" /><rect fill="#F5A9B8" width="16" height="9.6" y="3.2" clip-path="url(#myClip)" /><rect fill="#FFFFFF" width="16" height="3.2" y="6.4" clip-path="url(#myClip)" /></svg>';
    // 粉钩
    const img2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#F5A9B8" style="margin-bottom: -3px;"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></svg>';
    // 鱼板钩
    // TODO

    // 在此修改数字即可
    // 设置 TODO
    const img = img2;
    const foundElements = new Set();

    function checkForInner(targetClass) {
        const elements = document.getElementsByClassName(targetClass);
        for (const element of elements) {
            if (!foundElements.has(element)) {
                foundElements.add(element);
                element.innerHTML = img;
            }
        }
    }

    function checkForOuter(targetClass) {
        const elements = document.getElementsByClassName(targetClass);
        for (const element of elements) {
            if (!foundElements.has(element)) {
                foundElements.add(element);
                element.outerHTML = img;
            }
        }
    }

    function checkForNewElements() {
        checkForInner('sb_amazeui');
        checkForOuter('fa-badge-check');

        requestAnimationFrame(checkForNewElements);
    }

    requestAnimationFrame(checkForNewElements);

})();

