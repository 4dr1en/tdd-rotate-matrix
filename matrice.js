'use strict';

function matrice(matrix) {
	const matriceSize = matrix.length;

	const result = [];

	for (let i = 0; i < matriceSize; i++) {
		result.push(Array(matriceSize));
	}

	for (let x = 0; x < matriceSize; x++) {
		for (let y = 0; y < matriceSize; y++) {
			console.log(y, matriceSize - x)
			result[y][Math.abs(matriceSize - x - 1)] = matrix[x][y];
		}
	}

	console.log(result)
	return result;
}

module.exports = matrice;
