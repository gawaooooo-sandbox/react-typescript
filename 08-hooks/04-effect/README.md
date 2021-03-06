# 8-4. Effect Hookでライフサイクルを扱う

[副作用](https://ja.wikipedia.org/wiki/副作用_(プログラム))を扱うHooks

クラスコンポーネントのライフサイクルメソッド `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()` に相当する機能を実現するもの

**副作用** : データの取得、手動でのDOMの改変、ログの記録といったものになる

## useEffect()

```ts
useEffect(() => {
  doSomething(); // コンポーネントのレンダリング直前に実行される

  return clearSomething(); // アンマウント直前に実行される
}, [watchVar])
```

- 第一引数に、引数なしの関数を設定
  - 関数の中身がコンポーネントのレンダリングの直前に実行される
  - `componentDidMount()` や `componentDidUpdate()` といったメソッド内に書くのと同じこと
  - 関数は必ずしも戻り値を必要としないが、戻りにに関数を設定すると、コンポーネントのアンマウント直前に実行される
    - `componentWillUnmount()` に書くのと同じ
- 第二引数は配列で指定する
  - 省略可能
  - 配列の中に任意の変数を入れておくと、その値が前回のレンダリング時と変わらなければ第一引数で渡された関数の中身の副作用処理実行がキャンセルされることになる(?)
  - 上の例では、 `watchVar` が変更されていたら `doSomething()` が実行され、 `watchVar`の変更がなかったら `doSomething()` は実行されない
  - 第二引数を省略した場合は、問答無用でレンダリングするたびに `doSomething()` が実行される
  - 空の配列を渡すと、 `doSomething()` は初回のレンダリングでしか実行されなくなる
- useEffectは、useState()文と同様にひとつの関数コンポーネントの中で何回でも書ける。実行したい処理ごとにuseEffect()でまとめて書いてあげるとよい

## ライフサイクルの考え方
- Hooksではコンポーネントのライフサイクルの考え方のパラダイムを少し変換する必要がある
- クラスコンポーネントで書いていたとき
  - このライフサイクルのタイミングでこの処理とこの処理を実行する
- Effect Hooks
  - この処理を実行したいのは、これとこれのライフサイクルのタイミングである
