import React, { Component, SyntheticEvent } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

interface AppState {
  count: number;
}

// Componentクラスの型引数にはデフォルト値として `{}` という空オブジェクトが設定されている
// AppStateはLocal Stateの型になる
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    // Local Stateの初期化に必要なのでconstructorあり
    this.state = { count: 0 };
  }

  // アロー関数にすると、 `this.increment` で呼び出せる
  increment = (e: SyntheticEvent) => {
    // SyntheticEvent -> イベントハンドラのオブジェクト
    e.preventDefault(); // 該当要素のオリジナルなonClickの挙動を抑制

    // this.stateに直接値が導入できない
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              {/* 引数なしにメンバーメソッドのdecrement()を実行するアロー関数リテラル */}
              <Button color="red" onClick={() => this.decrement()}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
