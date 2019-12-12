//@ts-check
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

const sayHello = require('../src/module').sayHello;
describe('sayHello', function() {
      it('should return hello', function() {
        assert.equal(sayHello(), "hello");
      });
  });


const Request = require('../src/module').Request;
describe('Request', function() {
      it('should return OK', async function() {
        let respons = await Request();
        assert.equal(respons.ok,true);
      });
});

describe('Request', function() {
    it('Data is exist', async function() {
      let respons = await Request();
      let data = await respons.json();   
      assert.equal(data != null, true);
    });
});

describe('Request', function() {
      it('The quote length should be greater than 0', async function() {
        let respons = await Request();
        let data = await respons.json();   
        assert.equal(data.quote.length > 0, true);
      });
});
