
// 配列
const arr1: number[] = [1, 2, 3] // こちらの型を使うことが多い
const arr2: Array<number> = [1, 2, 3]

// オブジェクト
const john: {name: string, age: number} = {name: 'John', age: 20}

interface User {
    name: string
    age?: number
}

const jane: User = {name: 'Jane', age: 27}
const jack: User = {name: 'Jack'}

// Type Alias: インターフェース型に別の名前をつけられるもの。単独で使うようり型同士の合成時に使われることが多い
type Person = User
const rick: Person = {name: 'Rick', age: 31}

// Type Alias
interface Foo {hoge?: number, fuga: string}
interface Bar {hoge: number}
interface Buz {piyo: string}

type FooBar1 = Foo & Bar // {hoge: number, fuga: string}
type FooBar2 = Foo | Bar // {hoge?: number, fuga: string} or {hoge: number}
type FooBuz1 = Foo & Buz // {hoge?: number, fuga: string, piyo: string}
type FooBuz2 = Foo | Buz // {hoge?: number, fuga: string} or {piyo: string}
type BarFooBuz = Bar & (Foo | Buz) // {hoge: number, fuga: string} or {hoge: number, piyo: string}

// 交差型（Intersection Type）: 複数の方をひとつにまとめたもの。&を使う。合成した型のすべてのプロパティを備える。同じ名前のプロパティは必須が優先される
// 共用体型（Union Type）: 渡された複数の型のいずれかが適用される型

// Reactはコンポーネントの引数の型合成を行うことが多い。&を用いる交差型がよく使われる

// interfaceは同じ名前で複数回定義すると上書きではなく継承されていく！
// 既存のオブジェクトの型を拡張したいとき
//   型合成を行ってType Aliasで名前をつけるやり方をとる
//   まっさらの状態 -> interfaceでオブジェクト型を定義
//   既存のオブジェクト型の拡張や合成が必要なとき -> typeを使う

// constで宣言すると、変数自体の再代入はできないが、各要素の上書きや追加はできる
// TypeScript 3.4 から Readonlyな型が正式に提供された  -> 使用実績があまりないので、ReactやReduxで使う際のベストプラクティスがまだ見えていない状態

const readOnlyArr1: ReadonlyArray<string> = ['foo', 'bar']
const readOnlyArr2: readonly string[] = ['foo', 'bar'] // 上の書き方と同じ意味

// readOnlyArr1[0] = '123' // error TS2542
// readOnlyArr2[0] = 'agag' // error TS2542

// objectの場合は この書き方じゃないとだめみたい
const readOnlyObj1: Readonly<{foo: number}> = {foo: 2}
// readOnlyObj1.foo = 8 // error TS2540

// 書く側が気をつけて、インデックスを指定して値を上書きするようなコードを書かないようにする
// オブジェクトの任意の部分を変更したオブジェクトが必要な場合、そのプロパティを直に書き換えるのではなく、以下のようにする
// スプレッド演算子を使い、任意の要素だけを置き換えた新しいオブジェクトを返す。副作用を産まずに処理できる
const obj = {red: 'ff0000', green: '00ff00'}
const newObj = {...obj, green: '00ee00', blue: '0000ff'} // {red: 'ff0000', green: '00ee00', blue: '0000ff'}
