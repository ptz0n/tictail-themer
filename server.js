try {
    var config = require('./config.json')
}
catch(e) {
  console.error('Config not found. Run `gulp config`');
  process.exit();
}



var TT = require('./server/tictail')(config),
    fs = require('fs');

if(!fs.existsSync('./data/')) fs.mkdirSync('./data/');

TT.api('', function(err, data) {
    if(err) return console.error(err);
    fs.writeFile('./data/store.json', JSON.stringify(data));
});

TT.api('categories', function(err, data) {
    if(err) return console.error(err);
    fs.writeFile('./data/categories.json', JSON.stringify(data));
});

TT.api('products', function(err, data) {
    if(err) return console.error(err);
    fs.writeFile('./data/products.json', JSON.stringify(data));
});



var app  = require('express')();

app.engine('mustache', require('consolidate').mustache);
app.set('view engine', 'mustache');
app.set('views', __dirname);
app.disable('etag');

app.set('store', require('./server/models/store')());

require('./server/routes')(app);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Tictail Themer available at http://localhost:%s', port);
});