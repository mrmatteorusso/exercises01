const mostOccoredChar = require('./find-top-char');

test('count unique value of a string with no spaces', () => {
  expect(mostOccoredChar("mammax")).toStrictEqual({ m: 3, a: 2, x: 1 });
});

test('count unique value of a string with spaces', () => {
  expect(mostOccoredChar("werr  rrr r")).toStrictEqual({ w: 1, e: 1, r: 6 });
});


