/* exported chunk */

function chunk(array: unknown[], size: number): unknown[] {
  const chunks = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      chunks.push([array[i]]);
    } else {
      const lastChunk = chunks[chunks.length - 1];
      lastChunk.push(array[i]);
    }
  }
  return chunks;
}
