var table = require('./table/conversion_table');

function cp437ToUnicode(buf) {
  var str = '';
  for (var i = 0; i < buf.length; i++) {
    var unicodeChar = table[buf[i]];
    str += String.fromCharCode('0x' + unicodeChar);
  }
  return str;
}

module.exports = cp437ToUnicode;
