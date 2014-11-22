var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    prompt = require('gulp-prompt');

gulp.task('config', function () {
    gulp.src('server.js')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'store_id',
            message: 'Enter your store id',
            validate: function(store_id){
                return store_id !== ''
            }
        }, function (res){
            gutil.log("Saved config with store_id '" + res.store_id + "'");
            var config = JSON.stringify({
                store_id: res.store_id
            });
            require('fs').writeFile('./config.json', config);
        }));
});

gulp.task('default', []);