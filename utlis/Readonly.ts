type RR = {
  name: string
}

type RR1 = Readonly<RR>

type TRR<T> = {
  readonly [P in keyof T]: T[P]
}