var _ = require('underscore');

/**
 * Shop Index
 *
 * GET /
 */
exports.index = function(req, res) {

    var data = {
        list_page: {
            on_index: true,
            no_current_navigation: true
        }
    };

    _.extend(data, req.app.get('store'));
    return res.render('theme', data);
}