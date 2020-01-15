import React, { FC, useEffect, useState } from 'react';

import AppComponent from '../components/App';

// Custom Hook / カプセル化されている
// Custom Hookの関数名は `use` で始める決まりになっている
// `eslint-plugin-react-hooks`というHooksのためのプラグインがチェクする 規約でそうなっているだけで、ESLintを外せば動く
const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => {
    setTimeLeft(limitSec);
  };

  useEffect(() => {
    // tickの定義をuseEffectないに移動
    // limitSecが変更されたら、即座にtick()を定義し直してリセットの挙動を変更する
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);

    // limitSecの値がこのCustom Hookの全体的な振る舞いを変えることになるため、空だったuseEffect()の依存リストにlimitSecを追加
  }, [limitSec]);

  // 変数timeLeft, 関数 reset を返す
  return [timeLeft, reset];
};

// AppContainer の中身は実質2行。Custom Hookを汎用的に作れば、複数のコンポーネントで使い回すことも可能
const AppContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <AppComponent timeLeft={timeLeft} reset={reset} />;
};

export default AppContainer;
