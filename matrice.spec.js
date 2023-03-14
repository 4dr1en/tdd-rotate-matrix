const matrice = require('./matrice');

describe('Matrice', () => {
	it('should return the correct format', () => {
		const result =
			matrice([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
		expect(result).toMatchObject([expect.any(Array), expect.any(Array), expect.any(Array)]);

		const result2 =
			matrice([[99, 88, 77, 47], [45, 4, 5, 6], [58, 7, 8, 9], [45, 6, 456, 457]]);
		expect(result2).toMatchObject([expect.any(Array), expect.any(Array), expect.any(Array), expect.any(Array)]);
	});

	it('should return the correct values', () => {
		const result =
			matrice([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
		expect(result.flat()).toContain(1, 2, 3, 4, 5, 6, 7, 8, 9);
	});

	it('should return a matrice rotated for a matrix of size 2', () => {
		const result =
			matrice([
				[1, 2],
				[3, 4]
			]);
		expect(result).toMatchObject([
			[3, 1],
			[4, 2]
		]);
	});

	it('should return a matrice rotated for a matrix of size 3 ', () => {
		const result =
			matrice([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			]);
		expect(result).toMatchObject([
			[7, 4, 1],
			[8, 5, 2],
			[9, 6, 3]
		]);
	})

	it('should return a matrice rotated for a matrix of size 4', () => {
		const result =
			matrice([
				[99, 88, 77, 47],
				[45, 4, 5, 6],
				[58, 7, 8, 9],
				[45, 6, 456, 457]
			]);
		expect(result).toMatchObject([
			[45, 58, 45, 99],
			[6, 7, 4, 88],
			[456, 8, 5, 77],
			[457, 9, 6, 47]
		]);
	});

	it('should return the same if done four time', () => {
		const matrix = [
			[99, 88, 77, 47, 45, 4, 5, 6, 58, 7, 8, 9, 45, 6, 456],
			[457, 99, 88, 77, 47, 45, 4, 5, 6, 58, 7, 8, 9, 45, 6],
			[456, 457, 99, 88, 77, 47, 45, 4, 5, 6, 58, 7, 8, 9, 45],
			[6, 456, 457, 99, 88, 77, 47, 45, 4, 5, 6, 58, 7, 8, 9],
			[45, 6, 456, 457, 99, 88, 77, 47, 45, 4, 5, 6, 58, 7, 8],
			[9, 45, 6, 456, 457, 99, 88, 77, 47, 45, 4, 5, 6, 58, 7],
			[8, 9, 45, 6, 456, 457, 99, 88, 77, 47, 45, 4, 5, 6, 58],
			[7, 8, 9, 45, 6, 456, 457, 99, 88, 77, 47, 45, 4, 5, 6],
			[58, 7, 8, 9, 45, 6, 456, 457, 99, 88, 77, 47, 45, 4, 5],
			[6, 58, 7, 8, 9, 45, 6, 456, 457, 99, 88, 77, 47, 45, 4],
			[5, 6, 58, 7, 8, 9, 45, 6, 456, 457, 99, 88, 77, 47, 45],
			[4, 5, 6, 58, 7, 8, 9, 45, 6, 456, 457, 99, 88, 77, 47],
			[45, 4, 5, 6, 58, 7, 8, 9, 45, 6, 456, 457, 99, 88, 77],
			[47, 45, 4, 5, 6, 58, 7, 8, 9, 45, 6, 456, 457, 99, 88],
			[77, 47, 45, 4, 5, 6, 58, 7, 8, 9, 45, 6, 456, 457, 99]
		];
		const result =
			matrice(matrice(matrice(matrice(matrix))));

		expect(result).toMatchObject(matrix);
	});
});
