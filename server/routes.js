var fs    = require('fs'),
    merge = require('merge'),
    _     = require('underscore');

module.exports = function(app) {

    // General
    var store      = require('./models/store')(),
        navigation = require('./models/navigation')();
    app.use(function(req, res, next) {
        res.data = merge.recursive(true, store, navigation);
        next();
    });

    // Product
    var product = require('./controllers/product');
    app.get('/', product.index, product.list);
    app.get('/products', product.list);
    app.get('/product/:slug', product.page);

    // Custom pages
    // var page = require('./controllers/page');
    // app.get('/:slug', page.custom);

    app.use(function(req, res) {
        if(res.statusCode == 404) {
            return res.sendFile('./404.html', {
                root: __dirname
            });
        }
        res.data.partials = {};
        _.each(fs.readdirSync('./'), function(path) {
            var match = (/(.*)\.mustache/g).exec(path);
            if(!match || (match && match[1] == 'theme')) {
                return;
            }
            var partial = match[1];
            res.data.partials[partial] = partial;
        });
        res.render('theme', res.data);
    });
}