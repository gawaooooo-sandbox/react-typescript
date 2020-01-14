import React, { Component } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

// Componentクラスの型引数CharacterListProps
// コンポーネントをタグとしてマウントするときに必要な属性値とその型が決まる
class CharacterList extends Component<CharacterListProps> {
  render() {
    const { school, characters } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map(c => (
            // ループ処理で複数のコンポーネントとを生成するとき、その要素に一意なkey属性値を必要とする
            // 仮想DOMが変更を検知して、最小限の変更で実際のDOMに反映するのに使われる
            // パフォーマンスのために大事
            <Item key={c.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age}歳</Item.Meta>
                <Item.Meta>
                  {c.height ? c.height : '???'}
                  cm
                </Item.Meta>
              </Item.Content>
            </Item>
            /* eslint-enable */
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
