# class-join
A simple and small JavaScript utility for joining class names together. Made for use with frameworks like React, but can be used how you see fit.

## **Installation:**
```bash
npm i class-join
# or
yarn add class-join
```

## **Usage:**

### First let's import it
```js
// Node
const classJoin = require('class-join');

// ESM
import classJoin from 'class-join';
```

### Now let's use it
```js
/* STRINGS */
classJoin('loading-indicator', 'red-bg');
// => 'loading-indicator red-bg'

/* OBJECTS, falsey values cause extra spaces */
classJoin({ animated: 'truthy value', 'inactive-bg': false });
// => 'animated '

/* OBJECTS & STRINGS */
classJoin('loading-indicator', { animated: true });
// => 'loading-indicator animated'

/* ARRAYS (recursively flattened) */
classJoin(['activated', { nested: true }]);
// => 'activated nested'

/*
  All other types will be ignored but will cause extra spaces
  if they are either, falsey object (null) or not an object/string/array
*/
classJoin('test', undefined);
// => 'test '

classJoin(null, 'test');
// => ' test'

/* Multiple of same value will not be removed as there is no need */
classJoin('test', 'test', 'test');
// => 'test test test'
```

### NOTE: extra spaces will not affect use with DOM elements (includes framework elements like React)

## What about using it in React.js?

TLDR: just pass it to `className`

```jsx
/* REACT CLASS COMPONENT */
class MyComponent extends React.Component {
  render() {
    const { className } = this.props;
    return <div className={classJoin('test', className)}></div>;
  }
}

/* REACT FUNCTION COMPONENT */
function MyComponent({ className }) {
  return <div className={classJoin('test', className)}></div>;
}
```

# License
[MIT](https://github.com/ChrisBrownie55/class-join/blob/master/LICENSE) Copyright © 2018 Christopher Brown

Influenced by Jed Watson's [classnames](https://github.com/JedWatson/classnames)
