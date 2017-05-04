var tape = require('tape');
var parties = require('../index.js');

tape('basic test', function(test){
  test.equal(parties('Lab').name, 'Labour');
  test.end();
});

tape('alias test', function(test){
  test.equal(parties('tory').name, 'Conservatives');
  test.end();
});

tape('alias test', function(test){
  test.equal(parties('con').name, 'Conservatives');
  test.end();
});

