const sortPoints = require("./sortPoints");

describe('sortPoints', () => {
    test('sort points by ascending X value', () => {
        const points = [
            { x: 3, y: 5 },
            { x: 1, y: 2 },
            { x: 4, y: 7 },
        ];
        const sortedPoints = sortPoints(points);
        expect(sortedPoints).toEqual([
            { x: 1, y: 2 },
            { x: 3, y: 5 },
            { x: 4, y: 7 },
        ]);
    });

    test('do not sort points with non-numeric X values', () => {
        const points = [
            { x: 'test', y: 5 },
            { x: 1, y: 2 },
            { x: 'blue', y: 7 },
        ];
        const sortedPoints = sortPoints(points);
        expect(sortedPoints).toEqual(points);
    });

    test('handle empty array', () => {
        const points = [];
        const sortedPoints = sortPoints(points);
        expect(sortedPoints).toEqual([]);
    });

    test('handle single-element array', () => {
        const points = [{ x: 1, y: 2 }];
        const sortedPoints = sortPoints(points);
        expect(sortedPoints).toEqual([{ x: 1, y: 2 }]);
    });
});