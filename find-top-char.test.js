const mostOccoredChar = require('./find-top-char');

test('find unique values', () => {
  expect(mostOccoredChar("mammax")).toStrictEqual([ 'm', 'a', 'x' ]);
});