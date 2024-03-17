/**
 * @jest-environment jsdom
 */

const fs = require("fs")
require("@testing-library/jest-dom")
const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event").default

const {
    saveChart,
    loadAllSavedCharts,
    loadSavedChart,
    updateCurrentChartData,
    loadCurrentChartData
} = require('./chartStorage.js');


let localStorageMock = {};
global.localStorage = {
  setItem: (key, value) => {
    localStorageMock[key] = value.toString();
  },
  getItem: (key) => localStorageMock[key] || null,
  removeItem: (key) => {
    delete localStorageMock[key];
  },
  clear: () => {
    localStorageMock = {};
  }
};

test('saveChart function should save chart data to localStorage', () => {
  const chartData = { data: 'some data' };
  saveChart(chartData, 0);
  const savedCharts = loadAllSavedCharts();
  expect(savedCharts).toEqual([chartData]);
});

test('loadAllSavedCharts function should load all saved charts from localStorage', () => {
  localStorage.setItem('savedCharts', JSON.stringify([{ name: 'chart1' }, { name: 'chart2' }]));
  const savedCharts = loadAllSavedCharts();
  expect(savedCharts).toEqual([{ name: 'chart1' }, { name: 'chart2' }]);
});

test('loadSavedChart function should load a specific saved chart from localStorage', () => {
  localStorage.setItem('savedCharts', JSON.stringify([{ name: 'chart1' }, { name: 'chart2' }]));
  const savedChart = loadSavedChart(1);
  expect(savedChart).toEqual({ name: 'chart2' });
});

test('updateCurrentChartData function should update current chart data in localStorage', () => {
  const chartData = { data: 'some updated data' };
  updateCurrentChartData(chartData);
  const currentChartData = loadCurrentChartData();
  expect(currentChartData).toEqual(chartData);
});

test('loadCurrentChartData function should load current chart data from localStorage', () => {
  localStorage.setItem('currentChartData', JSON.stringify({ data: 'some current data' }));
  const currentChartData = loadCurrentChartData();
  expect(currentChartData).toEqual({ data: 'some current data' });
});

afterEach(() => {
  localStorage.clear();
});