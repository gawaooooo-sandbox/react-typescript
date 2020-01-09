// 関数を宣言するとき、戻り値は型推論で省略できるが、引数は必ず指定する必要がある

const add = (n: number, m: number): number => n + m
add(1, 3) // 4

function subtr(n: number, m: number): number {
    return n - m
}
subtr(5, 4) // 1

const hello = (): void => {
    console.log('Hello')
}
hello() // Hello

// 推論した戻り値の型を抽出する方法 -> ReturnType
const aloha = () => 'Aloha'
type Greeting = ReturnType<typeof aloha> // string
const chao = (): Greeting => 'Chao'
chao()

// 複数の関数の戻り値型をまとめて共用体型を作りたいときとかに役に立つ
// Reduxでは ReturnTypeが出てくる