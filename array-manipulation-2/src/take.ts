/* exported take */

function take(array: unknown[], count: number): unknown[] {
  const limit = Math.min(array.length, count);
  const taken = [];
  for (let i = 0; i < limit; i++) {
    const element = array[i];
    taken.push(element);
  }
  return taken;
}
