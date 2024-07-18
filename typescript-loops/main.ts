/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// function getKeys(obj: Record<string, unknown>): string[] {
function getKeys(obj: { [k: string]: any }): string[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
