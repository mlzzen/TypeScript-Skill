// 根据一个对象，得到对象所有不在同一层级value的类型
// based_on_an_object_get_all_the_types_of_the_object_that_are_not_at_the_same_level_of_value

const foo = {
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
