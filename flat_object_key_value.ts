// 把对象key value 拍平
// flat object key value

interface A {
    a: {
        name: string;
        age: number;
    };
    b: {
        w: boolean;
        h: symbol;
    };
}

type GetKeys<U> = U extends Record<infer K, any> ? K : never;

type UnionToIntersection<U> = {
    [K in GetKeys<U>]: U extends Record<K, infer T> ? T : never;
};

type Z = UnionToIntersection<A[keyof A]>;
