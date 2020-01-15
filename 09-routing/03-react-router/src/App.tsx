import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './components/Home';
import Characters from './components/Characters';

import './App.css';

// URLのルーティングマップ
// コンポーネントごとにルーティングできるが、単純化のためにほぼページ全体をひとつのルーティングの対象にしている
const App: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/characters/:code" component={Characters} />
      <Route path="/" component={Home} />
      {/* どのエントリにもマッチしなかったら、Redirectに行き当たってホームにリダイレクトされる */}
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
