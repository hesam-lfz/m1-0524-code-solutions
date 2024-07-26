/* exported takeRight */

function takeRight(array: unknown[], count: number): unknown[] {
  const taken = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++) {
    const element = array[i];
    taken.push(element);
  }
  return taken;
}
