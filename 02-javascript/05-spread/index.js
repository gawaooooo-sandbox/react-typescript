// 分割代入
const [n, m] = [1, 4]
console.log(n, m) // 1 4

const obj = {name: 'Test', age: 18}
const {name, age} = obj
console.log(name, age) // Test 18


// コレクションの展開構文
const arr1 = ['A', 'B', 'C']
const arr2 = [...arr1, 'D', 'E']
console.log(arr2) // ['A', 'B', 'C', 'D', 'E']

const obj1 = {a: 1, b: 2, c: 3}
const obj2 = {...obj1, d: 4, e: 5}
console.log(obj2) // {a: 1, b: 2, c: 3, d: 4, e: 5}

// プロパティ名のショートハンド
const foo = 666666
const obj3 = {foo, bar: 123}
console.log(obj3) // {foo: 666666, bar: 123}