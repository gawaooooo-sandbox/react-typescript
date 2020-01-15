import React, { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

// Propsの型をインターフェースで切り出して定義している
interface AppProps {
  timeLeft: number;
  reset: () => void;
}

// Local Stateだった`timeLeft` と リセット関数 `reset()` をコンポーネントのPropsとして外から渡すようにしている
// これをこのままマウントすれば、見た目だけ整っているけどタイマーが全く機能しないコンポーネントが表示される
// スタイルガイドに載せるのはこういったコンポーネント
const AppComponent: FC<AppProps> = ({ timeLeft, reset }) => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  </div>
);

export default AppComponent;
