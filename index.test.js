const classJoin = require('./index.js');

describe('classJoin', () => {
  test('should return the individual that was string passed in', () => {
    expect(classJoin('1')).toBe('1');
  });

  test('should return combined string when passed two, or more, strings', () => {
    expect(classJoin('1', '2')).toBe('1 2');
    expect(classJoin('1', '2', '3')).toBe('1 2 3');
  });

  test('should return keys of objects that have truthy values', () => {
    expect(classJoin({ test1: true })).toBe('test1');
    expect(classJoin({ test2: 'truthy' })).toBe('test2');
  });

  test('should not return keys of objects that have falsey values', () => {
    expect(classJoin({ test1: false })).toBe('');
    expect(classJoin({ test2: '' })).toBe('');
  });

  test('should return combined string when multiple objects are passed', () => {
    expect(classJoin({ test1: true }, { test2: true })).toBe('test1 test2');
  });

  test('should return combined string when multiple keys are passed in an object', () => {
    expect(classJoin({ test1: true, test2: true })).toBe('test1 test2');
  })

  test('should return combined string when strings and objects are passed', () => {
    expect(classJoin('test1', { test2: true })).toBe('test1 test2');
  });

  test('should handle arrays as if their values were arguments to the function', () => {
    expect(classJoin(['test1', { test2: true, test3: false }]))
      .toBe(classJoin('test1', { test2: true, test3: false }));
  });

  test('should remove all other types from the output causing extra spaces', () => {
    expect(classJoin('test', undefined)).toBe('test ');
    expect(classJoin(null, 'test')).toBe(' test');

  });
});
