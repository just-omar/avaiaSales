import { LOAD_TICKETS, GET_SEARCH_ID, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_ON, SHOW_MORE } from '../types';
import AviasalesService from '../../services/aviasalesService/aviasalesService';

const aviasalesService = new AviasalesService();

function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export const showMore = () => {
  return {
    type: SHOW_MORE,
  };
};

function onError(err) {
  return {
    type: ERROR_ON,
    err,
  };
}

export function getSearchId() {
  return async (dispatch) => {
    try {
      const searchId = await aviasalesService.getSearchId();
      if (searchId) {
        dispatch({
          type: GET_SEARCH_ID,
          searchId,
        });
      }
    } catch (err) {
      dispatch(onError(err));
    }
  };
}

export function loadTickets(searchId) {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      let stop = false;
      do {
        try {
          const ticketsArr = await aviasalesService.getTickets(searchId);
          if (ticketsArr) {
            stop = ticketsArr.stop;
            dispatch({
              type: LOAD_TICKETS,
              data: ticketsArr,
            });
          } else {
            throw new Error('Server Error');
          }
        } catch (err) {
          if (!err.message.includes('Server')) {
            dispatch(onError(err));
            throw err;
          }
        }
      } while (!stop);
      dispatch(loaderOff());
    } catch (err) {
      dispatch(onError(err));
      dispatch(loaderOff());
    }
  };
}
