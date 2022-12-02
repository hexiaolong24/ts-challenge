type PA = {
  name: string
  age: number
}

type BPA = Pick<PA, 'name'>

type FPick<T, K extends keyof T> = {
  [P in K]: T[P]
}