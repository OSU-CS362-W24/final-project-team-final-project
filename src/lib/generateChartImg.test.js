/**
* @jest-environment ./src/fixjsdomenvironment.js
*/

const generateChartImg = require('./generateChartImg');
require("whatwg-fetch")


test('should generate a non-empty chart image URL via QuickChart API (FLAKY)', async () => {
    // Test data
    const type = 'line';
    const data = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
    const xLabel = 'X-axis';
    const yLabel = 'Y-axis';
    const title = 'My Chart';
    const color = '#ff0000';

    // Make the actual API request
    const chartUrl = await generateChartImg(type, data, xLabel, yLabel, title, color);
    
    // Check if the result is a non-empty string
    expect(chartUrl).toEqual(expect.any(String));
    expect(chartUrl.length).toBeGreaterThan(0);
});
