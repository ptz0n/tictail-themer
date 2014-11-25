var store = require('./../../data/store.json'),
    util  = require('util');

module.exports = function() {
    data = {
        store_name: store.name,
        store_url: '',
        store_email: 'erik.eng@tictail.com',
        store_description: store.description,
        store_blog_url: 'https://tictail.com/blog/',
        store_subdomain: 'example',
        store_identifier: store.id,
        logotype: {}
    }
    if(store.logotype) {
        var sizes = store.logotype[0].sizes;
        for(var size in sizes) {
            data.logotype['url-'+size] = sizes[size];
        }
    }
    return data;
};