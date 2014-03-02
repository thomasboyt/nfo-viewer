// Convert conversion table to JSON

var fs = require('fs');
var tableSrc = fs.readFileSync('conversion_table.txt', 'utf8');

var lines = tableSrc.split('\n');

var codes = {};

lines.forEach(function(line) {
  var match = line.match(/(.+?)\s=\sU\+(.+?)\s/);

  if ( !match ) { return; }
  var cpCode = match[1];
  var unicode = match[2];

  // we convert to base 10 to avoid weirdness around stringifying hex codes
  // (ideally we should be using a map that allows non-string keys, but meh)
  var b10 = parseInt(cpCode, 16).toString(10);
  codes[b10] = unicode;
});

fs.writeFileSync('conversion_table.json', JSON.stringify(codes));
