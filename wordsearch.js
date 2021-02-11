const transpose = function(matrix) {
  const matrixHeight = matrix.length;
  const matrixLength = matrix[0].length;
  const result = [];
  
  for (let i = 0; i < matrixLength; i++) {
    let matrixRow = [];
    for (let j = 0; j < matrixHeight; j++) {
      matrixRow.push(matrix[j][i]);
    }
    result.push(matrixRow);
  }
  return result;
};

const transform = function(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  const res = {};

  for (let i = 0; i < row; i ++)  {
    for (let j = 0; j < column; j ++) {
      if (!res.hasOwnProperty(i - j)) {
        res[i - j] = [matrix[i][j]];
      } else {
        res[i - j].push(matrix[i][j]);
      }
    }
  }

  return res;
};

const wordSearch = (letters, word) => {

  if (!letters.length) {
    return false;
  }

  const reverseWord = word.split('').reverse().join('');

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }
    
  const verticalJoin = transpose(letters).map(ls=>ls.join(''));
  for (const v of verticalJoin) {
    if ((v.includes(word)) || (v.includes(reverseWord)))  return true;
  }

  const diagonalJoin = Object.values(transform(letters)).map(ls=>ls.join(''));
  for (const d of diagonalJoin) {
    if ((d.includes(word)) || (d.includes(reverseWord)))  return true;
  }
    
  // reverse items in array
  for (const arr of letters) {
    arr.reverse();
  }

  const reverseDiagonal = Object.values(transform(letters)).map(ls=>ls.join(''));
  for (const r of reverseDiagonal) {
    if ((r.includes(word)) || (r.includes(reverseWord)))  return true;
  }

  return false;
};

module.exports = wordSearch;

