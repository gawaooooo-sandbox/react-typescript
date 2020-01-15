import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { Dispatch, bindActionCreators } from 'redux';

import { add, decrement, increment } from '../actions/counter';
import Counter from '../components/Counter';
import { CounterState } from '../reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

// 慣習的にこの関数名
// 参照したいStore Stateの値をコンポーネントのPropsにマッピング
const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

// 慣習的にこの関数名
// 発行したいActionを生成するAction Creator関数をPropsにマッピングする
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

// // bindActionCreators()というユーティリティ関数を用いて書くこともできる
// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
//   bindActionCreators({ add, decrement, increment }, dispatch);

// HOCを使ってReduxとコンポーネントをつなぐ -> connectはカリー化された関数
// 2つの関数とマッピング対象のコンポーネントを引数に渡す
// 定義したPropsへのマッピングが有効になった新しいコンポーネントが返される
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
