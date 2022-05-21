const mostOccoredChar = require('./find-top-char');

test('count unique value of a string with no spaces', () => {
  expect(mostOccoredChar("mammax")).toStrictEqual({ m: 3, a: 2, x: 1 });
});

test('count unique value of a string with spaces', () => {
  expect(mostOccoredChar("werr  rrr r")).toStrictEqual({ w: 1, e: 1, r: 6 });
});

test('count unique value of a string, counting only letters and numebers', () => {
  expect(mostOccoredChar("we, rr;  r%rr r!!!")).toStrictEqual({ w: 1, e: 1, r: 6 });
});
