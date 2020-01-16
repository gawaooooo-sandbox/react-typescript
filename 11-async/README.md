 # 11-1. Reactで非同期通信を扱ういくつかの方法

 外部サービスAPIとの通信をどうするか

 JavaScriptなので必然的に非同期処理になる

 通信を含む副作用を生む非同期処理をどうやって書くのか？

 - Reactのコンポーネント内で処理する方法
  - async/await などを用いて非同期通信処理を行う関数をまず作る
  - それをライフサイクルメソッドやEffect Hook, イベントハンドラなどの中で実行
  - その結果をLocal Stateに格納して取り回す
  - **この方法を採用しているケースは少ない**
    - コンポーネントと通信処理が密結合
    - コンポーネントのコードが複雑に入り組んでしまう。可読性やテスタビリティの低下
    - 他のコンポーネントからそのデータを取り回して再利用するのが難しい
    - アプリ全体で見たときにどこで通信が発生しているのか把握しづらい

 - Reduxのミドルウェアを利用する方法
  - 開発コミュニティの多数派が支持
  - Redux開発チームを含む複数の開発者から、副作用を伴う非同期処理のためのReduxミドルウェアがいくつもリリースされている
    - Redux Thunk
    - Redux-Saga
    - redux-observable
    - Redux Promise Middleware

# 11-2. Redux Thunk vs. Redux-Saga

## Reduxの仕組みおさらい

- ViewからAction Creator経由でAction発行 -> Dispatcherによって割り振られ、 `(prevState, action) => newState` の純粋関数で表されるReducerによってStoreのStateが更新される

## ミドルウェアである Redux Thunkを組み込む

- Action Creatorの中に任意の処理、副作用を伴う被同期通信などを描くことができるようになる
- Action Creatorがその中で別のAction Creatorをコール -> 他のActionをdispatchすることもできる
- Action Creatorの巨大化 & そこからAPIアクセス
- Action Creatorで何でもできるようになる、というのがThunkの本質

### Pros
- シンプル。サイズが小さい
- 概念が理解しやすい、学習コストが低い
- コード記述量が比較的少ない
- Redux公式チームが開発。使用実績の多さ

### Cons
- Action Creatorが副作用を持つ
- 本来のReduxはひとつのAction CreatorがひとつにActionを発行するだけだったが、そのあり方から大きく離れている
- Props, Local Stateの変化のみが振る舞いを定義するというReactコンポーネントの本来のあり方を変える
- Action Creatorの入れ子。可読性が低くなる

### 総評
- 理解しやすく導入しやすいが、放っておくとどこまでもコードが汚くなる
- Action Creatorがカオスに、、
- React WayやRedux Wayから大きくハズレることになる

## Redux-Saga

- 既存のReduxの仕組みから独立
- 副作用をともなう非同期処理を `タスク` として登録しておく
- Dispatcherが受け取ったActionをReducerだけでなく、SagaのWatch Taskにもパスするー
- Watch Taskはアプリ起動時からReduxの仕組みとは独立したところでActionが来ないか待ち構えている。Actionがきたら、該当するタスクを起こして任意の処理を実行させる
- `Sagaパターン` というものがあり、その考え方を持ってきて応用したもの
- マイクロサービスの文脈から提案されただけあって、ドメインをまたがって複数のサービスAPIを利用するSPAと親和性が高い

### Pros
- 独立性が高い、Reduxの仕組みを崩さない
- コードの可読性やテスタビリティが高くなる
- 非同期処理を同期的にかける
- 開発が活発

### Cons
- 概念が理解しづらい。学習コストが高い
- コード記述量が多くなる
- タスクを表現するのに、独特のDSLぽい記述を使う必要がある
- ライブラリが巨大
