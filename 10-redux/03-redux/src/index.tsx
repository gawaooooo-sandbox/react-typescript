import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // ReduxをReactで使うためのモジュール
import { createStore } from 'redux';

import App from './App';
import counterReducer, { initialState } from './reducer';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './styles/semantic.min.css';

// Reducer関数とStateの初期値を関数に渡してStoreを作る
const store = createStore(counterReducer, initialState);

ReactDOM.render(
  // Reduxを使う場合はDOMのトップレベルで入れ子にしておく
  // ProviderコンポーネントにPropsとしてStoreを渡すと、下の階層のコンポーネントでStoreにアクセスできるようになる
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
