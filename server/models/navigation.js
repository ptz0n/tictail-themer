var categories = require('./../../data/categories.json'),
    store      = require('./../../data/store.json'),
    util       = require('util');

module.exports = function() {
    var data = {};
    data.terms = function() {
        return function(label) {
            return util.format(
                '<a class="tictail_terms fullscreen fullscreen_iframe" href="%s/legal/terms">%s</a>',
                store.url,
                label
            );
        }
    }
    data.return_policy = function() {
        return function(label) {
            return util.format(
                '<a class="tictail_return-policy fullscreen fullscreen_iframe" href="%s/legal/return-policy">%s</a>',
                store.url,
                label
            );
        }
    }
    return data;
}