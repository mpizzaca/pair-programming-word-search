const transpose = function(matrix) {
  const result = [];
  // Put your solution here
  for (let i = 0; i < matrix[0].length; i++) {
    const tmp = [];
    for (let j = 0; j < matrix.length; j++) {
      tmp.push(matrix[j][i]);
    }
    result.push(tmp);
  }
  return result;
};

const wordSearch = (letters, word) => { 
	
	if (letters.length === 0) return undefined;

	// check if horizontal left-to-right
	const horizontalJoin = letters.map(ls => ls.join(''));
	for (let l of horizontalJoin) {
			if (l.includes(word)) return true;
	}

	// check if diagonal left-to-right
	for (let i = 0; i < letters.length; i++) {
		let newArr = [];
		for (let j = 0; j < letters.length; j++) {
			newArr.push(letters[j][j+i]);
		}
		if (newArr.join('').includes(word)) return true;
	}
	
	// check if vertical top-to-bottom
	const verticalJoin = transpose(letters).map(ls => ls.join(''));
	for (let l of verticalJoin) {
		if (l.includes(word)) return true;
	}

	// check if vertical bottom-to-top
	// reverse letters for this
	letters.reverse();
	const verticalReverseJoin = transpose(letters).map(ls => ls.join(''));
	for (let l of verticalReverseJoin) {
		if (l.includes(word)) return true;
	}
	// undo above reverse
	letters.reverse();

	// ***
	// after this point, inner arrays remain reversed due to ls.reverse() call below
	// ***

	// check if horizonal right-to-left
	const reverseJoin = letters.map(ls => ls.reverse().join(''));
	for (let l of reverseJoin) {
		if (l.includes(word)) return true;
	}

	// check if diagonal right-to-left
	for (let i = 0; i < letters.length; i++) {
		let newArr = [];
		for (let j = 0; j < letters.length; j++) {
			newArr.push(letters[j][j+i]);
		}
		if (newArr.join('').includes(word)) return true;
	}

	// if nothing matched, return false
	return false;
};

module.exports = wordSearch;