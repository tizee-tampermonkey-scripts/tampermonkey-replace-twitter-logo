// ==UserScript==
// @name         Replace Twitter logo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Assume I am Elon Musck, the boss of Twitter.
// @author       tizee
// @match        https://twitter.com/*
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';
  // Linux logo from wikipedia
  const linuxPath = "M896,809.4c-25.9-10.6-47.2-27.4-45.7-59.4c1.5-32-22.9-53.2-22.9-53.2s21.3-70.1,1.5-128c-19.8-58-85.3-150.8-135.5-220.9c-50.2-70.1-7.6-150.9-53.2-254.4C594.4-10,475.7-4,411.7,40.2c-64,44.1-44.2,153.8-41.2,205.6c3.1,51.7,1.4,88.6-4.5,102c-6,13.4-47.2,62.5-74.7,103.6c-27.4,41.1-47.2,126.4-67.1,161.5c-19.8,35-6.1,67-6.1,67s-13.7,4.5-24.4,27.5c-10.7,22.8-32,33.4-70.1,41c-38.1,7.6-38.1,32.1-29,59.5c9.2,27.4,0,42.7-10.6,77.6c-10.7,34.9,42.6,45.7,94.4,51.7c51.8,6.2,109.7,39.7,158.5,45.7c48.7,6.1,63.9-33.5,63.9-33.5s54.8-12.3,112.7-13.7c57.9-1.5,112.7,12.2,112.7,12.2s10.7,24.4,30.5,35c19.8,10.7,62.5,12.2,89.9-16.7c27.5-29,100.6-65.5,141.7-88.4C929.5,855,921.9,820,896,809.4z M539.6,137.7c26.1,0,47.2,25.9,47.2,57.8c0,22.7-10.6,42.2-26,51.7c-3.9-1.7-8.1-3.5-12.5-5.4c9.3-4.6,15.9-16.4,15.9-30.3c0-18-11.1-32.6-24.9-32.6c-13.6,0-24.8,14.6-24.8,32.6c0,6.7,1.6,13.1,4.3,18.3c-8.1-3.2-15.6-6.2-21.5-8.5c-3.2-7.8-5-16.6-5-25.9C492.3,163.6,513.4,137.7,539.6,137.7z M536.2,259.6c13.1,4.5,27.6,13,26.1,21.4c-1.5,8.5-8.4,8.5-26.1,19.3c-17.7,10.7-56,34.5-68.3,36c-12.3,1.5-19.2-5.4-32.3-13.8c-13.1-8.5-37.6-28.5-31.4-39.2c0,0,19.1-14.6,27.5-22.3c8.5-7.7,30-26.1,43-23.7C487.8,239.6,523.1,255,536.2,259.6z M418.4,146.8c20.6,0,37.3,24.5,37.3,54.8c0,5.6-0.5,10.7-1.6,15.7c-5,1.7-10.1,4.5-15.1,8.7c-2.5,2.1-4.7,4-6.9,5.9c3.3-6.1,4.6-14.8,3.1-24c-2.8-16.5-13.8-28.6-24.7-26.9c-10.9,1.9-17.5,16.7-14.7,33.4c2.8,16.6,13.8,28.7,24.6,26.9c0.6-0.1,1.2-0.3,1.8-0.5c-5.3,5.1-10.2,9.5-15.2,13.2c-15.1-7-26.1-27.8-26.1-52.4C381.2,171.3,397.9,146.8,418.4,146.8z M378.2,916.5c-4.9,21.8-30.4,37.7-30.4,37.7c-23.2,7.3-87.6-20.7-116.8-32.9c-29.2-12.1-103.4-15.9-113.2-26.7c-9.7-11,4.9-35.4,8.6-58.4c3.6-23.2-7.3-37.7-3.7-53.6c3.7-15.8,51.1-15.8,69.3-26.7c18.3-11,21.9-42.6,36.5-51.1c14.6-8.6,41.3,21.8,52.3,39c10.9,16.9,52.3,90,69.3,108.3C367.3,870.2,383.1,894.6,378.2,916.5z M647.6,704.2c-4.4,21.5-4.4,99.1-4.4,99.1s-47.2,65.4-120.4,76.1c-73.1,10.7-109.7,3-109.7,3L372,835.3c0,0,31.9-4.6,27.4-36.6c-4.6-32-97.5-76.2-114.2-115.8c-16.7-39.5-3-106.6,18.3-140.2c21.3-33.5,34.9-106.5,56.3-131c21.3-24.3,38-76.1,30.4-99c0,0,45.7,54.9,77.6,45.8c32-9.2,103.7-62.5,114.2-53.3c10.6,9.2,102,210.2,111.1,274.2c9.2,63.9-6.1,112.7-6.1,112.7S652.1,682.9,647.6,704.2z M881.4,847.7c-14.2,13.1-93.4,45-117.1,70c-23.6,24.7-54.4,44.9-73.3,39c-19-6-35.5-32-27.2-69.9c8.2-37.8,15.4-79.2,14.2-102.9c-1.2-23.7-6-55.7,0-60.4c5.9-4.6,15.3-2.3,15.3-2.3s-4.6,44.9,22.5,56.8c27.2,11.7,66.2-4.7,78.1-16.7c11.9-11.8,20.2-29.5,20.2-29.5s11.8,6,10.6,24.9c-1.2,18.9,8.2,46.2,26.1,55.6C868.4,821.7,895.6,834.8,881.4,847.7z";

  const linuxFavicon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M896,809.4c-25.9-10.6-47.2-27.4-45.7-59.4c1.5-32-22.9-53.2-22.9-53.2s21.3-70.1,1.5-128c-19.8-58-85.3-150.8-135.5-220.9c-50.2-70.1-7.6-150.9-53.2-254.4C594.4-10,475.7-4,411.7,40.2c-64,44.1-44.2,153.8-41.2,205.6c3.1,51.7,1.4,88.6-4.5,102c-6,13.4-47.2,62.5-74.7,103.6c-27.4,41.1-47.2,126.4-67.1,161.5c-19.8,35-6.1,67-6.1,67s-13.7,4.5-24.4,27.5c-10.7,22.8-32,33.4-70.1,41c-38.1,7.6-38.1,32.1-29,59.5c9.2,27.4,0,42.7-10.6,77.6c-10.7,34.9,42.6,45.7,94.4,51.7c51.8,6.2,109.7,39.7,158.5,45.7c48.7,6.1,63.9-33.5,63.9-33.5s54.8-12.3,112.7-13.7c57.9-1.5,112.7,12.2,112.7,12.2s10.7,24.4,30.5,35c19.8,10.7,62.5,12.2,89.9-16.7c27.5-29,100.6-65.5,141.7-88.4C929.5,855,921.9,820,896,809.4z M539.6,137.7c26.1,0,47.2,25.9,47.2,57.8c0,22.7-10.6,42.2-26,51.7c-3.9-1.7-8.1-3.5-12.5-5.4c9.3-4.6,15.9-16.4,15.9-30.3c0-18-11.1-32.6-24.9-32.6c-13.6,0-24.8,14.6-24.8,32.6c0,6.7,1.6,13.1,4.3,18.3c-8.1-3.2-15.6-6.2-21.5-8.5c-3.2-7.8-5-16.6-5-25.9C492.3,163.6,513.4,137.7,539.6,137.7z M536.2,259.6c13.1,4.5,27.6,13,26.1,21.4c-1.5,8.5-8.4,8.5-26.1,19.3c-17.7,10.7-56,34.5-68.3,36c-12.3,1.5-19.2-5.4-32.3-13.8c-13.1-8.5-37.6-28.5-31.4-39.2c0,0,19.1-14.6,27.5-22.3c8.5-7.7,30-26.1,43-23.7C487.8,239.6,523.1,255,536.2,259.6z M418.4,146.8c20.6,0,37.3,24.5,37.3,54.8c0,5.6-0.5,10.7-1.6,15.7c-5,1.7-10.1,4.5-15.1,8.7c-2.5,2.1-4.7,4-6.9,5.9c3.3-6.1,4.6-14.8,3.1-24c-2.8-16.5-13.8-28.6-24.7-26.9c-10.9,1.9-17.5,16.7-14.7,33.4c2.8,16.6,13.8,28.7,24.6,26.9c0.6-0.1,1.2-0.3,1.8-0.5c-5.3,5.1-10.2,9.5-15.2,13.2c-15.1-7-26.1-27.8-26.1-52.4C381.2,171.3,397.9,146.8,418.4,146.8z M378.2,916.5c-4.9,21.8-30.4,37.7-30.4,37.7c-23.2,7.3-87.6-20.7-116.8-32.9c-29.2-12.1-103.4-15.9-113.2-26.7c-9.7-11,4.9-35.4,8.6-58.4c3.6-23.2-7.3-37.7-3.7-53.6c3.7-15.8,51.1-15.8,69.3-26.7c18.3-11,21.9-42.6,36.5-51.1c14.6-8.6,41.3,21.8,52.3,39c10.9,16.9,52.3,90,69.3,108.3C367.3,870.2,383.1,894.6,378.2,916.5z M647.6,704.2c-4.4,21.5-4.4,99.1-4.4,99.1s-47.2,65.4-120.4,76.1c-73.1,10.7-109.7,3-109.7,3L372,835.3c0,0,31.9-4.6,27.4-36.6c-4.6-32-97.5-76.2-114.2-115.8c-16.7-39.5-3-106.6,18.3-140.2c21.3-33.5,34.9-106.5,56.3-131c21.3-24.3,38-76.1,30.4-99c0,0,45.7,54.9,77.6,45.8c32-9.2,103.7-62.5,114.2-53.3c10.6,9.2,102,210.2,111.1,274.2c9.2,63.9-6.1,112.7-6.1,112.7S652.1,682.9,647.6,704.2z M881.4,847.7c-14.2,13.1-93.4,45-117.1,70c-23.6,24.7-54.4,44.9-73.3,39c-19-6-35.5-32-27.2-69.9c8.2-37.8,15.4-79.2,14.2-102.9c-1.2-23.7-6-55.7,0-60.4c5.9-4.6,15.3-2.3,15.3-2.3s-4.6,44.9,22.5,56.8c27.2,11.7,66.2-4.7,78.1-16.7c11.9-11.8,20.2-29.5,20.2-29.5s11.8,6,10.6,24.9c-1.2,18.9,8.2,46.2,26.1,55.6C868.4,821.7,895.6,834.8,881.4,847.7z'/%3E%3C/g%3E%3C/svg%3E";

  function once(f) {
    const _ = setInterval(()=>{
      f();
      clearInterval(_);
    });
  }

  once(()=>{
    const head = document.head;
    if(head !== null){
        document.head.querySelector('[rel="shortcut icon"]').href = linuxFavicon;
    }
  });

  const regex = /^https:\/\/twitter.com\/.*$/;

  function updateSvg(queryString,debug=false) {
    const svg = document.querySelector(queryString);
    if (debug) {
      console.debug(queryString, svg);
    }
    if(!svg) return;
    svg.setAttribute("viewBox","0 0 1000 1000");
    const path = svg.querySelector('path');
    path.setAttribute("d",linuxPath);
  }
  const observer = new MutationObserver(function (mutationList, observer) {
    if (!regex.test(window.location.href)) {
      return;
    }
    // Loading logo
    updateSvg('div[aria-label="Loading…"] svg');
    // header logo
    updateSvg('h1[role="heading"] a[aria-label="X"] svg');
    // logout logo
    updateSvg('div[data-testid="confirmationSheetDialog"] svg');
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
