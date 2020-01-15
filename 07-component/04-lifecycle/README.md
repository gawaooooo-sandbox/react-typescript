# 7-4. コンポーネントのライフサイクル
初期化されてマウントされレンダリングされ、何らかの処理が行われて再レンダリングされたりして、最後にアンマウントされるまでの過程

- Mounting ---- コンポーネントが生成されDOMノードに挿入されるフェーズ
- Updating ---- 変更を検知してコンポーネントが再レンダリングされるフェーズ
- Unmounting ---- コンポーネントがDOMノードから削除されるフェーズ
- Error Handling ---- コンポーネント自身および子コンポーネントのエラーを捕捉する

## コンポーネントが再レンダリングされるとき
- コンポーネントに渡されているPropsか、自身のLocal Stateの値に変更があったとき
- ライフサイクルの各フェーズに介入して任意の処理を差し込むことができるメソッドがある -> ライフサイクルメソッド

# ライフサイクルメソッド
Reactコンポーネントのライフサイクルは、バージョン16.3から17にかけて大きな変更が予定されている  
非推奨メソッドがあるので注意
