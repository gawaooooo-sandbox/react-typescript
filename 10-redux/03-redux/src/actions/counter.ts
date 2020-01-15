// ReduxのActionとそれを生成するAction Creatorと呼ばれる関数群を定義している
// Action -> やらせたいことの種類とAction実行に必要なデータを内包したただのJavaScriptオブジェクト

// typeが文字列だと、タイプミスをするなどで想定の動きと違ってしまうことがあるので、予防措置としてenumを使っている
export enum CounterActionType {
  ADD = 'COUNTER/ADD',
  DECREMENT = 'COUNTER/DECREMENT',
  INCREMENT = 'COUNTER/INCREMENT',
}

export interface CounterAction {
  type: CounterActionType;
  amount?: number;
}

export const add = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.ADD,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
