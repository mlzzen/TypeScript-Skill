// 根据value得到key
// get key by value

type S = {
    a: 1
    b: '2'
}

type Get<S, V> = { [k in keyof S]: S[k] extends V ? k : never }[keyof S]
type a = Get<S, 1>
