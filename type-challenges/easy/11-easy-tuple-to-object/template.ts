
// 遍历数组 [P in T[number]]
// 将元组转成对象 [1,2] 
/**
 * {
 *  1: 1,
 *  2: 2
 * }
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // T[number] 遍历数组
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof array -> 遍历出来的是索引
// keyof tuple -> 遍历出来的是具体的字面量类型
type r = TupleToObject<typeof tuple>;
// ok 这里的'1' 2 是类型，不是值
type error = TupleToObject<['1', 2]>;
// no 
// 因为对象key只能是string、number或者symbol，现在传入的是数组，对象，所以不可以
type eeerror = TupleToObject<[[1, 2], {}]>;

// js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历 array  T[number]
