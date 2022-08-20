// 目标：对key限制为obj的属性名称
// Goals: Restrict the key to the name of the property of the obj

interface X {
    a: number
    b: string
    c: number
}

function getProperty<T extends X, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

