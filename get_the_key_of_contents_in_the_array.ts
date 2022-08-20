// 获取数组内的内容
// Get the key of contents in the array

const t = ['a', 'b'] as const
type C = (typeof t)[number]
