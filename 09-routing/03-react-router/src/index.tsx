import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './styles/semantic.min.css';

ReactDOM.render(
  // 下の階層のコンポーネントでHTML5のHistory APIを利用した各種の機能が使えるようになる
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
