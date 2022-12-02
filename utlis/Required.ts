type RUser = {
  name?: string
  age?: number
}
type Rb = Required<RUser>
type TestB<T> = {
  [p in keyof T]-?: T[p]
}
type BB = TestB<RUser>
