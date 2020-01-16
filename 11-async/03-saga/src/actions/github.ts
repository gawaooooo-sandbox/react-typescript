import { AxiosError } from 'axios';

import { User } from '../services/github/models';
import * as ActionType from './githubConstants';

interface GetMembersParams {
  companyName: string;
}
interface GetMembersResult {
  users: User[];
}

// Sagaで非同期を扱うためgetMembersという一つの仕事について、「開始/成功/失敗」の三つの状態を持ったActionを返す
// typescript-fsaから借用した書き方
export const getMembers = {
  start: (params: GetMembersParams) => ({
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
    payload: params,
  }),

  succeed: (params: GetMembersParams, result: GetMembersResult) => ({
    type: ActionType.GET_MEMBERS_SUCCEED as typeof ActionType.GET_MEMBERS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetMembersParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type GithubAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>;
