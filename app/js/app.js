var $          = require('jquery');
var Backbone   = require('backbone');
Backbone.$     = $;
var Marionette = require('backbone.marionette');

var App = new Marionette.Application();

App.addRegions({
    mainRegion: "#wrapper"
});

App.on('start', function() {
    require("./apps/auth/app");

    Backbone.history.start();
});

module.exports = App;

App.start();
