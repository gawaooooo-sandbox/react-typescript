# 8-5. Custom Hookで独自のHookを作る

Hooksの処理をまとめて一つの関数にして、Custom Hookとして使うことができる

この方法を使うと

- 見た目だけを備えた `Presentational Component` を作る
- それをインポートしてきて、`Custom Hook`で必要な機能を追加して`Container Component`にする

が簡単にできるようになる


## Reactアプリケーション開発でのディレクトリの切り方
いろいろ流派がある

`components/`と`containers/`に分けて、対応するファイルを同じ名前・同じ階層に置く、というのが多数はのよう


Presentational ComponentとContainer Componentに分けて作ると、全体のコード量は多少増えてしまうが、それよりもコンポーネントの独立性を高めて再利用性やテスタビリティを担保することのほうが長い目で見れば断然重要
