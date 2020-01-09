# 5-1. JSXとは何であるか、何ではないのか

JSXはテンプレート言語ではない

MVCのアーキテクチャ
- ひとつのリクエストに対してControllerが起点
- Modelでそのページに必要なデータの取得・加工
- 最後にViewに描画

Reactの開発者
- DOMのインタラクティブな書き換えという複雑な問題に対応する
  - 独立性の高いコンポーネント単位に分割
    - ロジック＋デザインを完結させて閉じ込める
- ロジックを書きやすくすることを優先してJavaScriptでコンポーネントを記述することを選んだ

Reactでは、各コンポーネントはロジックレベルでもデザインレベルでもそれぞれ相互に独立 -> 処理が終わったものから五月雨的にレンダリング

React
- React Native
- React Desktop
- React 360

Webフロントエンドにとどまらない

ReactにとってのHTMLリテラルは、Webフロントエンドを対象のプラットフォームにした際のコンポーネントを記述するためのひとつの方便

静的なHTMLを返すために開発されたテンプレート言語とは根本の次元で思想が違う

`TSX` -> TypeScript eXtension。拡張子は `.tsx`

`JSX` -> 拡張子は `.jsx` or `.js`

----

## メモ
- `create-react-app` で生成されるコードがFunctional Componentになっているようだ。本の例では、Componentを継承している

- [Functional Component と PureComponentの違い・使い分け](https://qiita.com/daikoncl/items/a3806d8a8bf35f086487)
  - Hooks API導入でFunctional Componentが主流になっていく？
- [関数コンポーネントはクラスとどう違うのか?](https://overreacted.io/ja/how-are-function-components-different-from-classes/)
  - Reactにおける関数とクラスの違い
