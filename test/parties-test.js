var tape = require('tape');
var parties = require('../index.js');

tape('basic test', function(test){
  test.equal(parties('Lab').name, 'Labour Party');
  test.end();
});

tape('alias test', function(test){
  test.equal(parties('tory').name, 'Conservative Party');
  test.end();
});

tape('alias test', function(test){
  test.equal(parties('con').name, 'Conservative Party');
  test.end();
});

