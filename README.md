# TypeScriptFAQ
TypeScript常见问题 欢迎在Issues提问与写出自己的解答

1. 根据value获得key的类型/Get the type of key based on value
```ts
type S = {
    a: 1
    b: '2'
}

type Get<S, V> = { [k in keyof S]: S[k] extends V ? k : never }[keyof S]
type a = Get<S, 1>
```

2. 对key限制为obj的属性名称/Attribute names that are restricted to obj for key
```ts
interface X {
    a: number
    b: string
    c: number
}

function getProperty(obj: X, key: keyof X) {
    return obj[key].toString()
}
```
