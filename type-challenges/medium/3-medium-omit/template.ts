type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P] : T[P]
};
// 遍历联合类型 P in K
// 遍历对象 P in keyof T
