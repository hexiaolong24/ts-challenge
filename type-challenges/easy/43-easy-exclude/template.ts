// never 表示空集
// 如果是联合类型会依次取出对比，如果是固定类型，会直接比较
type MyExclude<T, U> = T extends U ? never : T;

// type MyExclude<T, U> = T extends U ? 'a' : 'b';

type A= '1' | '3'
type B = '1' // 'a' | 'b' 满足和不满足的类型会组成联合类型
type C = MyExclude<A, B>

interface IResponse {
  index: number;
  num: number;
  title: string;
  list: {
    name: string;
    age: number;
  }[];
}

type extractKey<T, K extends keyof T> = T[K] extends (infer A)[] ? A : T[K];
type t1 = extractKey<IResponse, "list">;
type t2 = extractKey<IResponse, "index">;

// js
function MyExclude(T, U: any[]) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];

    //     let boo = false;
    //     for (let j = 0; j < U.length; j++) {
    //       const u = U[j];

    //       if (t === u) {
    //         boo = true;
    //       }
    //     }

    //     if (!boo) {
    //       result.push(t);
    //     }
    if (!U.includes(t)) {
      result.push(t);
    }
  }

  return result;
}
