# 1-1. 環境構築

## Node.jsのバージョンマネージャ
- nvm or ndenv
- ndenv
  - ディレクトリごとに実行バージョンを使い分けられる
  - anyenv経由でインストールすることで、rbenv(Ruby)やpyenv(Python)とかと設定をある程度共通化できる

### Node.js と npmのバージョン
以下のバージョンを使用する

- v12.14.1
- 6.13.4

## Yarn
- `npm i -g yarn` でインストール
- npm
  - Rubyで言うところのRUbyGemsとRailsのBundlerをひっくるめたもの
  - Nodeモジュールパッケージの追加・削除＋各パッケージ間のバージョン整合とかも自動的にやる
- Yarn
  - Facebook性のnpm改良版
  - 高速、コマンドのタイピング数が少ないなど、いろいろ使い勝手がいい
  - React界隈はnpmよりYarnを使う人の方が多い

## エディタ
- VSCode
  - Developer Experienceを共有する意味でもVSCodeを使ってもらうとよい
  - VSCodeを採用する理由
    - TypeScriptと相性がよく、型の整合性チェックやNull安全性のチェック等を自動的にやってくれる
    - コードの自動整形や構文チェック、AI支援による入力サジェストといった便利なプラグインの提供
    - チームで使えば、コードの品質や開発効率の向上につながる
    - Visual Studio Live Shareで自分のマシンで同時コーディングができる
      - Google Docsで複数人のドキュメント同時編集ができるみたいな感じらしい
  - プロジェクトルートに `.vscode/` ディレクトリを作り、 `settings.json` を置くとVSCodeの設定、 `extensions.json` を置くと、推奨の拡張をチームで共有できるようになる