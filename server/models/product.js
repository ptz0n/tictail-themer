var util     = require('util'),
    _        = require('underscore'),
    products = require('./../../data/products.json');

var price_to_major = function(amount, currency) {
    var digits = currency.toLowerCase() == 'jpy' ? 0 : 2;
    return amount / Math.pow(10, digits);
}

var index = {};
products = _.map(products, function(product) {
    var price = price_to_major(product.price, product.currency);
    var data = {
        title: product.title,
        description: product.description,
        url: util.format('product/%s', product.slug),
        absolute_url: util.format('/product/%s', product.slug),
        identifier: product.id,
        price: util.format('%s %s', price.toFixed(2), product.currency),
        price_without_currency: price,
        price_with_currency: util.format('%d %s', price, product.currency),
        currency_code: product.currency,
        quantity_sum: product.quantity,
        is_quantity_unlimited: product.unlimited,
        in_stock: product.quantity || product.unlimited,
        out_of_stock: !product.quantity && !product.unlimited
    };
    // data.primary_image
    // data.all_images
    // data.slideshow-<size>
    // data.add_to_cart
    // data.add_to_cart_button
    // data.variations
    // data.variations_select
    // data.variations_radio
    // data.klarna
    // data.facebook_like_button
    // data.twitter_tweet_button
    // data.pinterest_pin_it_button
    // data.social_buttons
    index[product.slug] = data;
    return data;
});
// TODO: Index products by category

exports.list = function() {
    return products;
}

exports.get = function(slug) {
    return slug in index ? index[slug] : false;
}