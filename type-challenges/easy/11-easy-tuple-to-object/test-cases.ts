import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const atuple = ["tesla", "model 3", "model X", "model Y"];
// 如果不加as const 其实typeof atuple就是 string[] 类型
let r: typeof atuple = ['1', '2']
// 加上as const 就是字面量类型，不能改变
let re: typeof tuple = ["tesla", "model 3", "model X", "model Y"]

// number string symbol
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
// 期望下面这条语句报错
// 如果不满足，@ts-expect-error会飘红
type error = TupleToObject<[[1, 2], {}]>;

// const  let  js 世界
// type interface type 世界

// 1. typeof 将js世界改变成ts世界
// 2. 字面量类型
  const str = '123'
  // 不能改变'123'
  // 这就是字面量类型
  // let newStr: typeof str = '345' 
  // 可以
  // let newStr: typeof str = '123' 
// 3. @ts-expect-error 注释
