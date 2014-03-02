var express = require('express');
var http = require('http');
var fs = require('fs');

var cp437toUnicode = require('./lib/cp437');

var app = express()
  .use(express.logger('dev'))
  .use(function(req, res){
    // todo: make this more idiomatic
    var route = req.url;
    if (req.url === '/') {
      res.render('index.hbs');
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

        res.render('viewer.hbs', { nfo: nfo });
      });

    }
  });

http.createServer(app).listen(process.env.PORT || 5000);
