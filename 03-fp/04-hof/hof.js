// 高階関数 (Higher Order Function)

// 関数を返す関数
const hof = (ex, fn) => {
    return n => fn(n + ex)
}

// 省略するとこう
// const hof = (ex, fn) => n => fn(n * ex)

const plusOneDouble = hof(1, n => n * 2)

console.log(plusOneDouble(4)) // 10
