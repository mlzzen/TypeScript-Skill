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
4. 怎么获取数组内的内容
```ts
//比如
const t = ['a','b']
//怎么得到type c 的类型为'a' | 'b'
const t = ['a','b'] as const
type C = (typeof t)[number]
```
5. 如何限制this的类型
```ts
// 限制getName的this类型
getName(this: Obj) {}
```
6. Object.keys返回的类型不对
```ts
const a = {
    b: 1,
    c: '2'
}

const keys = Object.keys(a) as Array<keyof typeof a>
```
7. 根据一个对象，得到对象所有value
```ts
//现有 
const obj = {
    a: 1,
    b: 2,
    c: 3
}
//想要得到
type Obj = 1 | 2 | 3

//写法
const obj = {
    a: 1,
    b: 2,
    c: 3
} as const

type Obj = typeof obj[keyof typeof obj]
```
8. 根据一个对象，得到对象所有value，不在同一层级
```ts
//现有
const a = {
    a: 1,
    b: 2,
    c: 3,
    x: {
        d: 4
    }
} as const
//想要得到
type Value = 1 | 2 | 3 | 4

//写法
const a = {
    a: 1,
    b: 2,
    c: 3,
    x: {
        d: 4
    }
} as const

type ObjVal<T> = {
    [K in keyof T]: T[K] extends object ? ObjVal<T[K]> : T[K]
}[keyof T]

type x = ObjVal<typeof a>

``` 