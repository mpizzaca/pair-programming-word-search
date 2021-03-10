const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')
    
    assert.isFalse(result);
  });
  
  it("should return undefined if array is empty or input value is undefined", function() {
    const result = wordSearch([], undefined)
  
    assert.isUndefined(result);
  });

  it("should return true if the word is present (horizontal left-to-right)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present (horizontal right-to-left)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'E', 'L', 'P', 'P', 'A', 'G'],
      ['W', 'H', 'C', 'L', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE')

    assert.isTrue(result);
  });

  it("should return true if the word is present (vertical top-to-bottom)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'L', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE')

    assert.isTrue(result);
  });

  it("should return true if the word is present (vertical bottom-to-top)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'E', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'A', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE')

    assert.isTrue(result);
  });

  it("should return true if the word is present (diagonally left-to-right)", function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'I', 'P', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'P', 'U', 'A', 'L'],
      ['H', 'M', 'E', 'B', 'P', 'L', 'A', 'G'],
      ['W', 'H', 'C', 'L', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE')

    assert.isTrue(result);
  });

  it("should return true if the word is present (diagonally right-to-left)", function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'I', 'S', 'F', 'P', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'P', 'U', 'A', 'L'],
      ['H', 'M', 'E', 'L', 'P', 'L', 'A', 'G'],
      ['W', 'H', 'E', 'L', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'APPLE')

    assert.isTrue(result);
  });

});
