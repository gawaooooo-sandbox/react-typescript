import React, { FC } from 'react';
import { Card, Header, Image } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

import { User } from '../services/github/models';
import HtmlTitle from './HtmlTitle';
import Spinner from './Spinner';

import './Members.css';

// この時点で何をPropsとして定義するかということが大事
// このコンポーネントをContainer Componentでインポート -> これらのPropsをReduxのStoreにマッピング
// Container Componentが出来ていない段階で、Propsにダミーの値を渡して画面が表示されるか確認する
// CSSなどの見た目の調整もここで行う
// Container Componentができていない -> コンポーネントをマウントしている親コンポーネントのimportを書き換え
export interface MembersProps {
  companyName: string;
  users: User[];
  isLoading?: boolean;
}

const Members: FC<MembersProps> = ({
  companyName = '<会社名>',
  users = [],
  isLoading = false,
}) => {
  // lodash capitalize -> 先頭大文字、それ以降は小文字
  const title = `${capitalize(companyName)}の開発メンバー`;

  return (
    <>
      <HtmlTitle title={title} />
      <div className="Members" data-test="users">
        <Header as="h2">{title}</Header>
        {isLoading ? (
          <Spinner />
        ) : (
          <Card.Group>
            {users.map(user => (
              <Card
                key={user.id}
                href={`https://github.com/${user.login}`}
                target="_blank"
              >
                <Card.Content>
                  <Image floated="right" size="mini" src={user.avatar_url} />
                  <Card.Header data-test="card-header">
                    {user.login}
                  </Card.Header>
                  <Card.Meta>GitHub ID: {user.id}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </div>
    </>
  );
};

export default Members;
