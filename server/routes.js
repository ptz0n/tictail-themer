module.exports = function(app) {

    // Product
    var product = require('./controllers/product');
    app.get('/', product.index);
    // app.get('/products', product.list);
    // app.get('/product/:guid', product.page);

    // Custom pages
    // var page = require('./controllers/page');
    // app.get('/:guid', page.custom);

}