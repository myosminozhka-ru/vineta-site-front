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
      'http://localhost:3000/vineta/_nuxt/app.css',
    ],
    timeout: 1000, // default timeout before the print window appears
    autoClose: true, // if false, the window will not close after printing
    windowTitle: window.document.title, // override the window title
  }
  
  Vue.use(VueHtmlToPaper, options);

// import VueHtml2pdf from 'vue-html2pdf';
// Vue.use(VueHtml2pdf);