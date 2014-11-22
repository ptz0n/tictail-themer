try {
    var config = require('./config.json')
}
catch(e) {
  console.error('Config not found. Run `gulp config`');
  process.exit();
}

var TT = require('./tictail')(config),
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