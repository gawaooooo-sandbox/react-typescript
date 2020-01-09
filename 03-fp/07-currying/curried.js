// カリー化 -> 複数の引数をとる関数を、ひとつだけ引数をとる関数に分割してネストさせること

const multi = (n, m) => n * m
console.log(multi(2, 4)) // 8

const curriedMulti = n => {
    return m => n * m
}
console.log(curriedMulti(2)(4)) // 8

// return文を省略したもの
const simpleCurriedMulti = n => m => n * m
console.log(simpleCurriedMulti(2)(4)) // 8

// ひとつずつの値を返す関数がネストした高階関数にすることがカリー化

// ===

// カリー化された関数の部分適用  -> カリー化された関数の一部の引数を固定して新しい関数を作ることを 「関数の部分適用」
console.log(simpleCurriedMulti(3)(5)) // 15

// どんな数を渡しても常に3倍される関数が作れる
const triple = simpleCurriedMulti(3)
console.log(triple(5)) // 15

// Reactを使う上でのテクニックで、「コンポーネントを引数にとってコンポーネントを返す関数」というものを使う場面がある
// それを理解する上で、高階関数の概念は知っておいた方がよい