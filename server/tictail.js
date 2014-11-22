/*jslint node: true */
'use strict';

var util     = require('util'),
    request  = require('request');

module.exports = function(config) {
    var endpoint = util.format('https://api.tictail.com/v1/stores/%s', config.store_id);

    return {
        api: function(path, callback) {
            var url = endpoint;
            if(path !== '')
                url = util.format('%s/%s', endpoint, path);
            request.get(url, function(err, res, data) {
                if(err) return callback(err);
                callback(null, JSON.parse(data));
            });
        }
    };
}