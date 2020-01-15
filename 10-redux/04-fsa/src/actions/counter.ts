export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';

// FSAに合わせた書き方

export const add = (amount: number) => ({
  type: ADD as typeof ADD, // こうしないと、typeがstring型になってしまうので
  payload: { amount },
});

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT,
});

export const increment = () => ({
  type: INCREMENT as typeof INCREMENT,
});

export type CounterAction =
  | ReturnType<typeof add>
  | ReturnType<typeof decrement>
  | ReturnType<typeof increment>;
