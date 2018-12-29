module.exports = classNames = (...classes) =>
  classes.reduce((className, current) => {
    return typeof current == 'string'
      ? className + current
      : Array.isArray(current)
        ? className + classNames(...current)
        : typeof current == 'object'
          ? className + Object.keys(current).map(key => current[key] ? key : '').join(' ')
          : className;
  }, '');
