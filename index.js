module.exports = classJoin = (...classes) =>
  classes.reduce((className, current) =>
    className.concat(
      typeof current == 'string'
        ? current
        : Array.isArray(current)
          ? classJoin(...current)
          : typeof current == 'object' && current
            ? Object.keys(current).map(key => current[key] ? key : '')
            : ''
    ), []).join(' ');
