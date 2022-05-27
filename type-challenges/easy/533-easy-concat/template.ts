type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];

type Fir<T extends unknown[]> = T extends [infer F, ...infer Rest] ? F : never;

type f = Fir<[1,2,3]>

type Tair<T extends unknown[]> = T extends [...infer F, infer Rest] ? Rest : never;

type t = Tair<[1,2,3]>
// js
function Concat(arrA, arrB) {
  // spread

  return [...arrA, ...arrB];
}