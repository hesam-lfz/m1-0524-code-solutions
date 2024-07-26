/* exported dropRight */

function dropRight(array: unknown[], count: number): unknown[] {
  const remaining = [];
  const limit = array.length - count;
  for (let i = 0; i < limit; i++) {
    const element = array[i];
    remaining.push(element);
  }
  return remaining;
}
