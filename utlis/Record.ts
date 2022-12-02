type RA = {
  name: string
  age: number
}

type KK = 'xiaoming' | 'xiaoqiang' | 'xiaoyan'

// 不满足约束“string | number | symbol”
// type KK = ['xiaoming', 'xiaoqiang', 'xiaoyan']

type AA = Record<KK, RA>

type FR<K extends string | number | symbol, T> = {
  [P in K]: T
}