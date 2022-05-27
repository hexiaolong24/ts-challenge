type Length<T extends readonly any[]> = T["length"];

// js
function getLength(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}

// 知识点
// 什么是 tuple 类型
// tuple 和普通的数组有什么区别
// 如果是数组那么返回number 因为不知道具体的length

// 如果是tuple就是具体的length
// type LenArray = string[]
// type l = LenArray['length'] // number

type LenArray = ['1', '2']
type l = LenArray['length'] // 2
