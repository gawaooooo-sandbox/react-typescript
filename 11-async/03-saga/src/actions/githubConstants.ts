// Action Typeの定義をAction Creatorとは別のファイルに切り出す
// まとめてインポートできて扱いやすい
// 将来的に異なるドメインの複数のサービスAPIを使うことを考慮して、値の頭にプレフィックスをつけている
export const GET_MEMBERS_START = 'GITHUB/GET_MEMBERS_START';
export const GET_MEMBERS_SUCCEED = 'GITHUB/GET_MEMBERS_SUCCEED';
export const GET_MEMBERS_FAIL = 'GITHUB/GET_MEMBERS_FAIL';
