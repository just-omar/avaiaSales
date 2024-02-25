import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { FilterReducer } from './reducers/filterReducer';
import { TabsReducer } from './reducers/tabsReducer';
import { TicketsReducer } from './reducers/ticketsReducer';

const rootReducer = combineReducers({
  FilterReducer,
  TabsReducer,
  TicketsReducer,
});
const middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
