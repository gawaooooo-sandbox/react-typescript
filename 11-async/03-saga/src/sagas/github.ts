// Sagaのタスク
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/githubConstants';
import { getMembers } from '../actions/github';
import { getMembersFactory } from '../services/github/api';

// タスク関数。引数としてActionが渡される
// Return TypeでAction Creatorの戻り値の型を指定しておくと、Payloadの中身から値が抽出できる
function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;

  try {
    const api = getMembersFactory();
    // ジェネレータを使って書くようになっている
    // Effect APIを使う -> APIリクエストが実行される
    // callで非同期処理関数を実行する場合、そのふたつめ以降の引数がその関数を実行する際の引数になる
    const users = yield call(api, companyName);

    yield put(getMembers.succeed({ companyName }, { users }));
  } catch (error) {
    yield put(getMembers.fail({ companyName }, error));
  }
}

export function* watchGetMembers() {
  // Action.GET_MEMBERS_START という Action Type の ActionをDispatcherから渡されてこないか監視し続ける
  // 目当てのActionを受け取ったら、runGetMembersを実行する
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);

  // takeEvery or takeLatestを使うことが多い
  // takeEvery: 渡されたActionの数だけ律儀にタスクを実行する
  // takeLatest: 以前に渡されたActionのタスクが終了していなくて滞っている場合は、最新のものだけを実行する --> F5連打のリクエストに律儀に対応する必要がないときとか
}

// 最上位のタスクとなるもの。これをSagaミドルウェアにわたすとアプリ起動時に同時に起動される
export default function* rootSaga() {
  // forkされた分だけ別のタスクも立ち上がってスタンバイする
  yield all([fork(watchGetMembers)]);
}
