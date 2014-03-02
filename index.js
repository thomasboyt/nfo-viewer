var connect = require('connect');
var http = require('http');
var fs = require('fs');

var cp437toUnicode = require('./lib/cp437');

var app = connect()
  .use(connect.logger('dev'))
  .use(function(req, res){
    var route = req.url;
    if (req.url === '/') {
      res.end('Add an nfo file to the url.');
    } else {

      fs.readFile('./nfos' + req.url, function(err, buf) {

        if ( err ) {
          if ( err.code === 'ENOENT' ) {
            res.statusCode = 404;
            res.end('Page not found.');
            return;
          } else {
            throw Err;
          }
        }

        var nfo = cp437toUnicode(buf);
        res.end(nfo);
      });

    }
  });

http.createServer(app).listen(3000);
