# 1-2. Hello, World!

公式「Reactはフレームワークではなく、単なるUIライブラリ」

Facebookが `Create React App` コマンドモジュールを出してくれている

## Create React App
https://github.com/facebook/create-react-app

`npx create-react-app hello-world --typescript`

- `npx`: npmのパッケージをインストールしなくてもそのバイナリが実行できるコマンド
- サンプルアプリが `hello-world` ディレクトリに作成される

## Reactで作られるアプリケーションについて
- すべてコンポーネントの組み合わせで構成される
- コンポーネントはJavaScriptで記述される
- JavaScriptの関数コールでHTMLタグの出力を記述するのは読みづらいので、 `JSX` というJSの中にHTMLタグがそのまま書ける拡張記法を使う
- `src/App.tsx` は `<App>` タグの中身を定義したファイル。TypeScriptで拡張されたJSX -> **TSX**

