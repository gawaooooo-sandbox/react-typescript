// 値を保持しつつ繰り返し処理や逐次処理を行うための手段 -> ジェネレータ関数 もある
// function* という宣言文と yield という返却構文

function* rangeGenerator(end, start = 0) {
    let n = 0

    for (let i = start; i < end; i++) {
        n += 1
        yield i // yieldで返された値が戻り値オブジェクトのvalueプロパティに格納される
    }
}

const gen = rangeGenerator(3)

// 戻り値のオブジェクトからnext()という関数が実行できる
console.log(gen.next()) // { value: 0, done: false }
console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: undefined, done: true }

// Redux-Saga というライブラリを使った処理を書くときに頻出する記法