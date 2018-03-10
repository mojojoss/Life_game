import {pow} from '../model/model.js'
describe("pow", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });

});