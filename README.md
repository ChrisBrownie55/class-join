# class-names
A simple and small JavaScript utility for joining class-names together. Made for use with frameworks like React, but can be used how you see fit.

## **Installation:**
```bash
npm i class-names
# or
yarn add class-names
```

## **Usage:**

### First let's import it
```js
// Node
const classNames = require('class-names');

// ESM
import classNames from 'class-names';
```

### Now let's use it
```js
/* STRINGS */
classNames('loading-indicator', 'red-bg');
// => 'loading-indicator red-bg'

/* OBJECTS */
classNames({ animated: 'truthy value', 'inactive-bg': false });
// => 'animated'

/* OBJECTS & STRINGS */
classNames('loading-indicator', { animated: true });
// => 'loading-indicator animated'

/* ARRAYS (recursively flattened) */
classNames(['activated', { nested: true }]);
// => 'activated nested'

/* All other types will be ignored */
classNames('test', undefined);
// => 'test'

/* Multiple of same value */
classNames('test', 'test', 'test');
// => 'test test test'
```

## What about React.js
```jsx
/* REACT CLASS COMPONENT */
class MyComponent extends React.Component {
  render() {
    const { className } = this.props;
    return <div className={classNames('test', className)}></div>;
  }
}

/* REACT FUNCTION COMPONENT */
function MyComponent({ className }) {
  return <div className={classNames('test', className)}></div>;
}
```

# License
[MIT](https://github.com/ChrisBrownie55/class-names/blob/master/LICENSE) Copyright © 2018 Christopher Brown

Influenced by Jed Watson's [class-names](https://github.com/JedWatson/classnames)
