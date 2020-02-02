export const classNames = (...classes: any[]): string =>
  classes.reduce((className, current) =>
    className.concat(
      typeof current == 'string'
        ? current
        : Array.isArray(current)
          ? classNames(...current)
          : typeof current == 'object' && current
            ? Object.keys(current).map(key => current[key] ? key : '')
            : ''
    ), []).join(' ');