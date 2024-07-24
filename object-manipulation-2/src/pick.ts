/* exported pick */
function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const o: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    if (source[key]) {
      o[key] = source[key];
    }
  }
  return o;
}
