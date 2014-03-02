var assert = require('assert');
var fs = require('fs');
var convert = require('./index');

describe('cp437', function() {
  it('converts to unicode', function() {
    var input = fs.readFileSync('fixtures/descent.in.nfo');
    var expected = fs.readFileSync('fixtures/descent.out.nfo', 'utf8');
    assert.equal(convert(input), expected);
  });
});
