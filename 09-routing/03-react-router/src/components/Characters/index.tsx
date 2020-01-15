import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string';
import Helmet from 'react-helmet';
import { Button, Divider, Icon } from 'semantic-ui-react';

import { characterData } from '../../characterData';
import Spinner from '../common/Spinner';
import CharacterList from './CharacterList';

import './index.css';

// {code: string} は、App.tsxのRoute pathの :code
type CharactersProps = {} & RouteComponentProps<{ code: string }>;

// history, location, matchはwithRouterを適用したコンポーネントないのPropsとして渡される
const Characters: FC<CharactersProps> = ({ history, location, match }) => {
  const codes = Object.keys(characterData);
  const targetCode = match.params.code;
  const isLoading = parse(location.search).loading === 'true';

  // urlのcodeがCharacterDataに存在する場合はコンポーネントが描画され、存在しない場合はホームにRedirectされる
  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title>キャラクター一覧 | はねバド！</title>
      </Helmet>
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      {isLoading ? (
        <Spinner />
      ) : (
        <CharacterList
          school={characterData[targetCode].school}
          characters={characterData[targetCode].players}
        />
      )}
      <Divider hidden />
      <Button
        basic
        color="grey"
        onClick={() => {
          // push: そのURLにいた履歴が残る
          // replace: 過去が抹消される。ブラウザの戻るボタンで戻られると困るときは replace()
          history.push('/');
        }}
      >
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

// HOC
export default withRouter(Characters);
