/* exported drop */

function drop(array: unknown[], count: number): unknown[] {
  const remaining = [];
  for (let i = count; i < array.length; i++) {
    const element = array[i];
    remaining.push(element);
  }
  return remaining;
}
