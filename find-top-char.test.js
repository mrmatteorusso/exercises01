const mostOccoredChar = require('./find-top-char');

test('count unique value', () => {
  expect(mostOccoredChar("mammax")).toStrictEqual({ m: 3, a: 2, x: 1 });
});