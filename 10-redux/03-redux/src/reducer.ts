// Actionの振り分けをするreducer

import { Reducer } from 'redux';
import { CounterAction, CounterActionType } from './actions/counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        // State型の中にはcountのいち要素しかないので、 ...stateのスプレッド構文の部分は不要かと思われるが、
        // 実際の業務開発では、Stateの中身が一要素だけということはほとんどなく、あとから要素を追加したときに書き忘れて他の要素が上書きされるケースがあるのであえてこうしている
        ...state,
        count: state.count + (action.amount || 0),
      };
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      // never型を使って漏れをチェックする。すべてのCounterActionTypeがcaseとして定義されているか -> されていない場合は、neverに割り当てられずエラーになる
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default counterReducer;
