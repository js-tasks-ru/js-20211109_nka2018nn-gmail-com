/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrayCopy = [...arr];
  return arrayCopy.sort((a, b) => {
    if (param === 'asc') {
      if (a.toLowerCase() === b.toLowerCase() && a !== b) {
        return b.localeCompare(a);
      }
      return a.localeCompare(b);
    }
    if (param === 'desc') {
      return b.localeCompare(a);
    }
  });
}
