/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const splitPath = path.split('.');
  return function(object) {
    return splitPath.reduce((target, level) => target?.[level], object);
  };
}
