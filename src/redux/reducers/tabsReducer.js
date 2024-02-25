import { CHANGE_TAB } from '../types';

const initialState = {
  items: {
    cheap: 'Самый дешёвый',
    fast: 'Самый быстрый',
    optimal: 'Оптимальный',
  },
  selectedKey: 'cheap',
};

export const TabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        selectedKey: action.key,
      };
    default:
      return state;
  }
};
