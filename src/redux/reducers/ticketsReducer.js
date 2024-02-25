import { LOAD_TICKETS, GET_SEARCH_ID, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_ON, SHOW_MORE } from '../types';

const initialState = {
  tickets: [],
  searchId: null,
  isLoading: true,
  isError: false,
  isStop: false,
  viewCount: 5,
};

export const TicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.data.tickets],
        isStop: action.data.stop,
      };
    case GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.searchId,
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_ON:
      return {
        ...state,
        isError: action.err.message,
      };
    case SHOW_MORE:
      return {
        ...state,
        viewCount: state.viewCount + 5,
      };
    default:
      return state;
  }
};
