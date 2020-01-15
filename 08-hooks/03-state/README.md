# 8-3. State Hook で Local State の管理

シンプルにまとまっていて読みやすくなる

クラスならインスタンスの中でメンバー変数が状態を記憶しているのはわかる

実際はReactモジュールのグローバル空間にそれぞれのコンポーネントに関連付けられる形で配列として格納されてるっぽい

`useState()`を使って複数のLocal Stateを設定するとき、条件文とかでくるんでしまうと配列の順番んがおかしくなるのでそれはタブー

関数定義の最初の方に `useState()` をプレーンに連ねて書く

```ts
const [foo, setFoo] = useState(100)
const [bar, setBar] = useState('Initial Bar')
const [hoge, setHoge] = useState(true)
```
