var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/health', function (req, res) {
    res.send({status: 'OK'});
});

app.use('/', express.static('./public'));

app.listen(port, function (err) {
    if (err) {
        return log.info('Error running node app:', err);
    }
    log.info('node listening on ' + port);
});
