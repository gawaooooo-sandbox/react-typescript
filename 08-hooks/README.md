# 8-1. Hooks登場以前の話

最近まで既存のコンポーネントに機能を追加するやりかた

- HOC(High Order Component): 高階コンポーネントと呼ばれる関数を使う方法
  - コンポーネントを引数にとり、戻り値としてコンポーネントを返す関数のこと
  - Reduxを始めとするメジャーなライブラリは、たいていがHOCのインターフェースを備えている
  - 親コンポーネントと子コンポーネントの間でPropsの名前の衝突が起きるとバグる、JSXの内部で使うことができないので柔軟性に欠ける、などの理由で公式Reactチームには嫌われている
- Render Props: 公式がHOCに代わるものとして出してきた
  - 親、子、孫の3階層のコンポーネントを意識する必要がある
  - 肝は真ん中の子コンポーネント
  - どうしても理解したかったら [公式ドキュメント](https://ja.reactjs.org/docs/render-props.html) を読む
  - ほとんど使う場面がない
  - Wrapper Hell
  - Hooksの登場によって、Render Propsはほぼ将来を断たれた

# 8-2. Hooksとはなにか
React Way的には、クラスコンポーネントよりも関数コンポーネントのほうが望ましい

関数コンポーネントはLocal Stateもライフサイクルメソッドも持てない

HOCを使って関数コンポーネントにLocal Stateやライフサイクルメソッドといったクラスコンポーネントが持っている機能を始めとする便利な機能を付与できる `Recompose` というライブラリがよく使われていた

`Recompose`の作者がReact開発チームで中心的な役割を果たして開発されたのが`Hooks`

`Hooks`: 様々なReactの機能をクラスを使わずに利用できるようにするもの

関数コンポーネントにLocal StateやライフサイクルといったReactの機能を **接続する(hook into)** から `Hooks`

## Hooks
- Wrapper Hellになりやすい、可読性が低いといった点がほぼクリアされている
- コードが読みやすくシンプルになる
- stateやライフサイクルを使うといったコンポーネントに付与したい機能をそこだけ切り出すことも簡単
- 再利用しやすくテストしやすい
- 将来的には、クラスコンポーネントでできることがすべて関数コンポーネントでもできるようになる


## クラスコンポーネントと関数コンポーネント
- 既存のコードはクラスコンポーネントで書かれていることが多い
  - 既存のクラスコンポーネントをHooksを使って書き換える必要はない
- ライフサイクルの概念は、クラスコンポーネントのライフサイクルメソッドを先に知っていたほうが理解しやすい
- 新しく作るコンポーネントはHooksと関数コンポーネントで作ることを推奨

# 8-6. その他のHooks

## Hooksを使う際の注意点
- Hooksを呼べるのは関数コンポーネントかCustom Hookの中のみ
  - クラスコンポーネントやReactモジュール管轄外での使用は不可
- Hooks文を記述するのはその関数のトップレベルで行う。条件分岐やループ、ネストした関数内に記述するのは不可
- Custom Hookの関数名は `useXXX` のように必ず `use` で始める

## HooksのAPI
- useState, useEffect 以外にもたくさんある
- useState, useEffect と比べると、他のHooksの出番はあんまりない
  - あるとしても、使う場面がありそうなのは `useRef()`, `useMemo()` くらいか？
- useRef(): DOMへの参照のためのrefオブジェクトを取得するためのものだが、そのcurrentプロパティの値は変更可能でどんな値でも保持することができるので、インスタンス変数のように使える
  - 任意のLocal Stateの前回レンダリング時の値を保持しておきた場合とかはこんなふうに書ける
    ```
    const Counter: FC = () => {
      const [count, setCount] = useState(0);

      const prevCountRef = useRef(0); // useRefの引数の中身でcurrentプロパティの初期化
      const prevCount = prevCountRef.current;

      useEffect(() => {
        prevCountRef.current = count;
      });

      return <div>Now: {count}, before: {prevCount}</div>;
    };
    ```

- useMemo(): useEffect()によく似ているが、副作用を伴う処理を行うのではなく、任意の計算結果を保持しておきたいときに使う
  ```
  const memoValue = useMemo(() => calculateSomething(), [watchVar])
  ```
  - 第二引数の配列に渡された変数が前回のレンダリング時と差分があれば、第一引数の実行結果が戻り値として返される
  - パフォーマンス最適化のためによく使われることがあるが、特定のPropsが変更されたときだけ任意の子コンポーネントの再レンダリングを行いたい場合はこうする
  ```
  const Parent: FC<{a: string, b: string}> = ({a, b}) => {
    const child1 = useMemo(() => <Child1 a={a} />, [a]);
    const child2 = useMemo(() => <Child2 b={b} />, [b]);

    return (
      <>
        {child1}
        {child2}
      </>
    )
  }
  ```
  - クラスコンポーネントの `shouldComponentUpdate()` に相当するもの
  - shouldComponentUpdateとちがい、マウントする親のコンポーネントにロジックを書かないといけないのが面倒
  - パフォーマンス最適化は、コンポーネント設計の初期段階で行うのはタブー。完成したもののパフォーマンスがでなかったときに改めて検討する
