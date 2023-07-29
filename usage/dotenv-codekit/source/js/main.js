//
//  BootStrap 5.x JavaScript
//
//  Some Bootstrap components require JavaScript. This file powers those components.
//  It uses ECMAScript modules, so to work in browsers it must be 'bundled' into a single,
//  browser-compatible JS file. CodeKit does this automatically using Rollup.
//

//
//  1. Import Bootstrap Modules
//     Remove the modules you don't need to reduce the file size of your final JS:
//
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';

//
//  2. Import PopperJS
//     If you use the 'dropdown', 'tooltip', or 'popover' Bootstrap components, you MUST include PopperJS
//     or those components won't work. If you do not use those components, remove this import:
//
import '@popperjs/core/lib/index.js'

//
//  3. Add your custom JavaScript below, either directly or by importing ES6 modules:
//