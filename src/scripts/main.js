// var bespoke = require('bespoke'),
  // nebula = require('../../../lib/bespoke-theme-nebula.js'),
  // keys = require('bespoke-keys'),
  // touch = require('bespoke-touch'),
  // bullets = require('bespoke-bullets'),
  // scale = require('bespoke-scale'),
  // progress = require('bespoke-progress'),
  // backdrop = require('bespoke-backdrop');

// bespoke.from('article', [
  // nebula(),
  // keys(),
  // touch(),
  // bullets('li, .bullet'),
  // scale(),
  // progress(),
  // backdrop()
// ]);

// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  //cube = require('bespoke-theme-cube'),
  //terminal = require('bespoke-theme-terminal')
  //mozillaSandstone = require('bespoke-theme-mozilla-sandstone'),
  nebula = require('bespoke-theme-nebula'),
  //fancy = require('bespoke-theme-fancy'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  //cube(),
  //terminal(),
  //mozillaSandstone(),
  nebula(),
  //fancy(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');


