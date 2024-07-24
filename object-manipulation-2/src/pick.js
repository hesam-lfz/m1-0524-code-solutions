'use strict';
/* exported pick */
function pick(source, keys) {
  let o = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key]) {
      o[key] = source[key];
    }
  }
  return o;
}
