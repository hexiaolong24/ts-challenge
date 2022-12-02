type EEE = 'a' | 'b'

type EEEEE = Extract<EEE, 'b'>

type FE<T, U> = T extends U ? T : never