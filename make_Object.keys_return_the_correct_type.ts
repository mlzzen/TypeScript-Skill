// 使Object.keys返回的类型
// Make Object.keys return the correct type

const a = {
    b: 1,
    c: '2'
}

const keys = Object.keys(a) as Array<keyof typeof a>
