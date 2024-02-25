import { CHANGE_TAB } from '../types';

export const changeTab = (key) => {
  return {
    type: CHANGE_TAB,
    key,
  };
};
