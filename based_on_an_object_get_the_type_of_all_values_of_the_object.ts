// 根据一个对象，得到对象所有value的类型
// based on an object, get the type of all values of the object

const obj = {
    a: 1,
    b: 2,
    c: 3
} as const

type Obj = typeof obj[keyof typeof obj]
