var Marionette   = require('backbone.marionette');
var LoginView    = require("./views/login");
var RecoveryView = require("./views/recovery");
var App          = require("../../app");

var Router = Marionette.AppRouter.extend({
    appRoutes: {
        "": "login",
        "login": "login",
        "recovery": "recovery",
    }
});

var API = {
    login: function() {
        var view = new LoginView();
        App.mainRegion.show(view);
    },
    recovery: function() {
        var view = new RecoveryView();
        App.mainRegion.show(view);
    }
};

new Router({
    controller: API
});

module.exports = Router;
