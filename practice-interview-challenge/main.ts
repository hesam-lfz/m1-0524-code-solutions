const getRangeReport: (start: number, end: number) => object = (
  start: number,
  end: number
) => {
  const evens: number[] = [];
  const odds: number[] = [];
  const range: number[] = [];
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
