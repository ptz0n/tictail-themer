var product = require('./../models/product'),
    merge   = require('merge');

exports.index = function(req, res, next) {
    var data = {
        list_page: {
            on_index: true,
            no_current_navigation: true,
        }
    };
    merge.recursive(res.data, data);
    next();
}

exports.list = function(req, res, next) {
    var data = {
        list_page: {
            products: product.list()
        }
    };
    merge.recursive(res.data, data);
    next();
}