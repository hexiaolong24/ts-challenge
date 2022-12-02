type EA = 'a' | 'b' | 'c'

type EEA = Exclude<EA, 'b'>

type FEEA<T, U> = T extends U ? never : T

type FF = FEEA<EA, 'b'> 
