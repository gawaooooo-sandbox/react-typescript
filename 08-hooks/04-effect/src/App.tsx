import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const LIMIT = 10;

const App: FC = () => {
  // Local Stateの定義と初期化
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));

    // // ComponentDidUpdate()でカウントが0になったら自動的に60リセットする場合のsetTimeLeft
    // setTimeLeft(prevTime => prevTime - 1);
  };

  // ライフサイクルメソッドがuseEffectにまとまった
  useEffect(() => {
    // 第二引数に空の配列を渡しているので、setIntervalは初回のレンダリングでしか実行されない
    const timerId = setInterval(tick, 1000);

    // コンポーネントがアンマウントされる際に clearInterval が実行される
    return () => clearInterval(timerId);
  }, []);

  // // ComponentDidUpdate()に記述していた、カウント0になったら自動的に60にリセットする処理をuseEffect()を使うと
  // useEffect(() => {
  //   // TODO: timeLeft === 0だと、0が表示されない
  //   // if (timeLeft === 0) setTimeLeft(LIMIT);
  //   // TODO: 0を表示させる場合はこちら
  //   if (timeLeft < 0) setTimeLeft(LIMIT);
  // }, [timeLeft]);

  return (
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
};

export default App;
