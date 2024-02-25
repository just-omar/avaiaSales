import { SELECT_ALL_ON, SELECT_ALL_OFF, SELECT_FILTER } from '../types.js';

const initialState = {
  all: { label: 'Все', checked: true },
  noChange: { label: 'Без пересадок', stopsCount: 0, checked: true },
  oneChange: { label: '1 пересадка', stopsCount: 1, checked: true },
  twoChanges: { label: '2 пересадки', stopsCount: 2, checked: true },
  threeChanges: { label: '3 пересадки', stopsCount: 3, checked: true },
};

export const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return {
        ...state,
        [action.selectedKey]: {
          ...state[action.selectedKey],
          checked: !state[action.selectedKey].checked,
        },
        all: { ...state.all, checked: false },
      };
    case SELECT_ALL_ON:
      return {
        ...state,
        all: { ...state.all, checked: true },
        noChange: { ...state.noChange, checked: true },
        oneChange: { ...state.oneChange, checked: true },
        twoChanges: { ...state.twoChanges, checked: true },
        threeChanges: { ...state.threeChanges, checked: true },
      };
    case SELECT_ALL_OFF:
      return {
        ...state,
        all: { ...state.all, checked: false },
        noChange: { ...state.noChange, checked: false },
        oneChange: { ...state.oneChange, checked: false },
        twoChanges: { ...state.twoChanges, checked: false },
        threeChanges: { ...state.threeChanges, checked: false },
      };
    default:
      return state;
  }
};
