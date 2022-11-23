const transpose = function (matrix) {
  let result = [];

  //two for loops let us access every element in the given matrix
  //determine how many columns do we have
  for (let i = 0; i < matrix[0].length; i++) {

    // console.log("i: " + i);
    //determine how many rows do we have
    let newMatrixArr = [];
    for (let j = 0; j < matrix.length; j++) {
      // console.log("j: " + j);
      newMatrixArr.push(matrix[j][i]);
    }
    result.push(newMatrixArr);
  };
  return result;
}


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");


printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));