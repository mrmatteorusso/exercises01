const mostOccoredChar = require('./find-top-char');

test('count unique value of a string with no spaces', () => {
  expect(mostOccoredChar("mammax")).toStrictEqual("m");
});

test('count unique value of a string with spaces', () => {
  expect(mostOccoredChar("werr  rrr r")).toStrictEqual("r");
});

test('count unique value of a string, counting only letters and numebers', () => {
  expect(mostOccoredChar("we, rr;  r%rr r!!!")).toStrictEqual("r");
});


//tests for: null, undefined, {}, []
