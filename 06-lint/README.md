# 6-1.ESLint

vscodeのプロジェクトルートではないディレクトリにeslint設定ファイルがあった場合、 `@typescript-eslint/eslint-plugin` が読めないと怒られた

プロジェクトルートの `settings.json` に

`"eslint.workingDirectories": [{"mode": "auto"}],` を追加することで解決

https://github.com/microsoft/vscode-eslint/issues/696#issuecomment-566949199
