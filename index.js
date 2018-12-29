module.exports = classNames = (...classes) =>
  classes.reduce((className, current) =>
    className.concat(
      typeof current == 'string'
        ? current
        : Array.isArray(current)
          ? classNames(...current)
          : typeof current == 'object'
            ? Object.keys(current).map(key => current[key] ? key : '')
            : ''
    ), []).join(' ');
