const classNames = require('./index.js');

describe('classNames', () => {
  test('should return the individual that was string passed in', () => {
    expect(classNames('1')).toBe('1');
  });

  test('should return combined string when passed two, or more, strings', () => {
    expect(classNames('1', '2')).toBe('1 2');
    expect(classNames('1', '2', '3')).toBe('1 2 3');
  });

  test('should return keys of objects that have truthy values', () => {
    expect(classNames({ test1: true })).toBe('test1');
    expect(classNames({ test2: 'truthy' })).toBe('test2');
  });

  test('should not return keys of objects that have falsey values', () => {
    expect(classNames({ test1: false })).toBe('');
    expect(classNames({ test2: '' })).toBe('');
  });

  test('should return combined string when multiple objects are passed', () => {
    expect(classNames({ test1: true }, { test2: true })).toBe('test1 test2');
  });

  test('should return combined string when strings and objects are passed', () => {
    expect(classNames('test1', { test2: true })).toBe('test1 test2');
  });

  test('should handle arrays as if their values were arguments to the function', () => {
    expect(classNames(['test1', { test2: true, test3: false }]))
      .toBe(classNames('test1', { test2: true, test3: false }));
  });
});
