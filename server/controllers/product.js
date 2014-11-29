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

exports.page = function(req, res, next) {
    var product_data = product.get(req.params.slug);
    if(!product_data) {
        res.statusCode = 404;
    }
    var data = {
        product_page: {
            product: product_data
        }
    };
    merge.recursive(res.data, data);
    next();
}