import { isArray, isObject, snakeCase, transform } from 'lodash';

// camel -> snake
export const decamelizeKey = (obj) =>
  transform(obj, (acc, value, key, target) => {
    const snakeKey = isArray(target) ? key : snakeCase(key);

    if (typeof File !== 'undefined') {
      acc[snakeKey] = value;
    } else if (isObject(value)) {
      acc[snakeKey] = decamelizeKey(value);
    } else {
      acc[snakeKey] = value;
    }
  });
