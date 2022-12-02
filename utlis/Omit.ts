type Oa = {
  name: string
  age: number
  sex: string
}

type Oaa = Omit<Oa, 'sex'>

type OOOO<T, U extends keyof T> = {
  [P in keyof T as P extends U ? never : P]: T[P]
}