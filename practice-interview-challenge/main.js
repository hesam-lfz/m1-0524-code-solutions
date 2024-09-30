'use strict';
const getRangeReport = (start, end) => {
  const evens = [];
  const odds = [];
  const range = [];
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
    let l = evens;
    if (i % 2 === 1) l = odds;
    l.push(i);
    range.push(i);
  }
  const average = total / (end - start + 1);
  return {
    average,
    evens,
    odds,
    range,
    total,
  };
};
console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
