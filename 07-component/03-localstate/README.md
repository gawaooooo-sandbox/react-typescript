# 7-3. コンポーネントと内部の状態を規定するLocal State

## コンポーネントで最も大事なもの
- Props
    - 親コンポーネントから受け取る値のこと
- Local State
    - コンポーネント自身が内部に持つ状態のこと
- ライフサイクル



## Local State
- ComponentにLocal Stateの型を渡す
- 初期化はconstructorで
- 値の設定は必ず `setState()` メソッドで
  - 引数
    - 設定したい値のStateオブジェクト
      - Stateに固定値を設定するとき
    - `(prevState, props) => newState` 形式のStateとPropsを引数として受け取り新しいStateを返す関数
      - 動的に変更したい場合

