// クロージャ (Closure) : 関数閉包

// クラスでカウンタ
class Counter {
    constructor(initialCount) {
        this.c = initialCount
    }

    increment() {
        return this.c++
    }
}

const counter = new Counter(1)
console.log(counter.increment(), counter.increment(), counter.increment()) // 1 2 3

// クロージャで実現
const counterMaker = (initialCount) => {
    let c = initialCount
    const increment = () => c++

    // 関数incrementを返す
    return increment
}

// countの中身は内部の関数increment
const count = counterMaker(1)

// countを実行すると、counterMaker内部のincrementが実行される
// increment単体ではなく、counterMakerの環境の中で実行されているので、変数cはリセットされない
console.log(count(), count(), count()) // 1 2 3

// クロージャは必ずしも関数を返す必要はない
// クロージャ -> 親関数スコープの変数を参照する関数のこと

// React開発 -> 関数でコンポーネントを実装するときに、その中で外のスコープの変数を参照する関数を定義することはよくある