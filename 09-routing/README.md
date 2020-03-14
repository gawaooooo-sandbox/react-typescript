# 9-1. SPAのルーティング

## Webアプリケーションにおけるルーティング
- Railsなどの、サーバーサイドWebアプリケーションの場合
  - アプリケーションサーバがリクエストされたURLに対して、それに紐付けられたページを生成し、レスポンスとして返す
- SPAの場合
  - アプリケーションサーバの役割は、最初のリクエストに対してアプリ全体が記述されたJavaScriptのコードのかたまりを返すだけで終わる
  - HistoryAPIがHTML5になって、 `pushState()`, `replaceState()` というメソッドが実装された
    - 任意のURLをブラウザ履歴に追加したり修正したりできるもの
    - これによって、JSでURLが完全に制御可能になり、今あるほとんど全てのフロントエンドフレームワークは軒並みこのAPIを使ってルーティングを実現している

- 注意点
  - サーバにリクエストが行かない -> サーバ側からはクライアントがどんなページを見ているかとか、ページをどう移動したかとかがわからない
  - アクセス解析を行う上でネックにな  
  - サーバがHTTPステータスコードを返せない
    - サイトマップやGoogle Analyticsの管理機能を使うことでフォローする場面も
  - ルーティングの適用単位がコンポーネント
    - Reactに組み込むルーターは個々のコンポーネントがURLに紐づく
    - Reactに対応したルーターでは、親コンポーネントの知らないところで子コンポーネントが自分でURLを見て振る舞いを変えたりできる

# 9-2. React Routerにまつわるあれこれ
`React Router` が圧倒的なデファクトスタンダード

3系から4系に移ったときに、大きな破壊的変更があった

ルーティングの中でやるべきじゃないことが3系ではできたので、4系で削除されている


## 使わないほうがいいモジュール
`react-router-redux`: React Routerが公式のパッケージとして提供しているもの

react-router-reduxは、ReduxのAction Creatorの処理中にリダイレクト処理とかを差し込むことができるもの。

ReactやReduxの思想からは、Action Creatorがそのような副作用を持つことは好ましくない

Reactアプリはすべてがコンポーネントで構築されているはず

リダイレクトが必要なら、コンポーネント自身がそのPropsやLocal Stateから判断して実行するのがあるべき姿

## ドキュメント
[React Router](https://reacttraining.com/react-router/web/guides/quick-start)


# 9-3. React Routerの使い方
ルーティング遷移時にスクロール位置が変わらない

たいていのSPA用ルーティングライブラリの挙動はそう

History APIのpushState()を使ったルーティングでは履歴が変わって新しいページがレンダリングされても、スクロール位置は遷移前のままになる

`componentDidMount()`に`window.scrollTo(0, 0` を仕込んだコンポーネントを作って、DOMツリーの上のほうでマウントさせるみたいな処理が必要になる