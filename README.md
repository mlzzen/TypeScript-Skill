# TypeScriptFAQ
TypeScript常见问题 欢迎在Issues提问与写出自己的解答

1. 根据value获得key的类型
```ts
type S = {
    a: 1
    b: '2'
}

type Get<S, V> = { [k in keyof S]: S[k] extends V ? k : never }[keyof S]
type a = Get<S, 1>
```
2. 对key限制为obj的属性名称
```ts
interface X {
    a: number
    b: string
    c: number
}
function getProperty<T extends X, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

//或者 注意这个返回值只能推断出 number|string
function getProperty(obj: X, key: keyof X) {
    return obj[key]
}
```
3. 怎么把数组作为一个类型
```ts
const A = [1,2,3] as const
```
