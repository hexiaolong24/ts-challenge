// 注意 ts中 === 就是 extends
// 第一种
// T 是否 === []，如果是 返回never
// type First<T extends any[]> = T extends [] ? never:  T[0]

// 第二种
// 判断length是否等于0
// type First<T extends any[]> = T['length'] extends 0 ? never:  T[0]

// 第三种
// T[number] 表示 联合类型，如果有T[0]，那么T[0] 一定在 T[number]中，否则返回never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] :  never

// 第四种
// infer First 可以理解为解构赋值
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// 第五种 [P in keyof T]:P 返回的是索引组成的数组，看第一个是不是'0'
// 如果 T是 空数组 KeyIndex 返回的是一个 空数组 ，此时空数组[]中取 [][0] 取出的是undefined
type KeyIndex<T extends any[]> = {
  [P in keyof T]:P
}
type First<T extends any[]> = KeyIndex<T>[0] extends '0' ? T[0] : never

type arr = []
type Arr = KeyIndex<arr>
// T[number]表示遍历数组、元组，（注意是具体的值，而不是索引）
type ages = ['a']
// union
type T1 = ages[number]

//看看 某个值是不是在 union 里面
// type t2 = T[0] extends ages[number] ? "true":"false"


type Tail<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest
  : never;


type t4 = Tail<[1,2,3]>


// T === []
// js
const first = (arr) => {
  // arr 是不是一个空数组 如果是的话 那么返回 never

  const [first, ...rest] = arr;
  return first ? first : "never";
};

// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性  indexed
// 3. extends union  判断的规则
// 4. infer 的使用(推断)
