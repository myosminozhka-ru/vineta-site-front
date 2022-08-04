// main.js

import Vue from "vue";
// ...
import VueHtmlToPaper from "vue-html-to-paper";

const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      'http://62.109.13.15:3000/_nuxt/css/a388784.css',
      'http://62.109.13.15:3000/_nuxt/css/0f46fbb.css',
      'http://62.109.13.15:3000/_nuxt/css/1629377.css',
      'http://62.109.13.15:3000/_nuxt/css/70f033f.css',
      'http://62.109.13.15:3000/_nuxt/css/d6fa115.css',
      'http://62.109.13.15:3000/_nuxt/css/d535a41.css',
      'http://62.109.13.15:3000/_nuxt/css/4180f79.css',
      'http://62.109.13.15:3000/_nuxt/css/a638625.css"',
      'http://62.109.13.15:3000/_nuxt/css/bbabfd0.css',
      'http://62.109.13.15:3000/_nuxt/css/4c9a249.css',
      'http://62.109.13.15:3000/_nuxt/css/de09dba.css',
      'http://62.109.13.15:3000/_nuxt/css/e6a3d2e.css',
    ],
    timeout: 1000, // default timeout before the print window appears
    autoClose: true, // if false, the window will not close after printing
    windowTitle: window.document.title, // override the window title
  }
  
  Vue.use(VueHtmlToPaper, options);

// import VueHtml2pdf from 'vue-html2pdf';
// Vue.use(VueHtml2pdf);