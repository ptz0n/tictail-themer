var merge = require('merge');

module.exports = function(app) {

    // General
    var store      = require('./models/store')(),
        navigation = require('./models/navigation')();
    app.get('*', function(req, res, next) {
        res.data = merge.recursive(true, store, navigation);
        next();
    });

    // Product
    var product = require('./controllers/product');
    app.get('/', product.index, product.list);
    app.get('/products', product.list);
    // app.get('/product/:slug', product.page);

    // Custom pages
    // var page = require('./controllers/page');
    // app.get('/:slug', page.custom);

    app.get('*', function(req, res) {
        res.render('theme', res.data);
    });
}