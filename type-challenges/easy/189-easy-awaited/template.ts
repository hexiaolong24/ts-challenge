// T extends Promise<unknown> 约束传入只能是Promise类型 
// 先判断是不是Promise  T肯定是 不会走到never 
// 从T中取出X
// 如果X是Promise 递归
// 如果不是 直接返回对应类型
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? 
  X extends Promise<unknown> ? MyAwaited<X> : X 
  : never
// infer
// 1. 只能在 条件类型里面使用
// 2. 设置未知数  变量
