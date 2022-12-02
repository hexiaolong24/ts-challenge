type User = {
  name: string
  age: number
}
type Auser = Partial<User>

type TestUser<T> = {
  [p in keyof T]?: T[p]
}
let a: TestUser<User> = {
  name: 'q3w',
  age: 1,
}
