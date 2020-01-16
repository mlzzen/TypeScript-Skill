# TypeScriptFAQ
TypeScript常见问题

1. 根据value获得key的类型
```ts
type S = {
    a: 1;
    b: '2';
};

type Get<S, V> = { [k in keyof S]: S[k] extends V ? k : never }[keyof S];
type a = Get<S, 1>;
```