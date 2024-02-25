import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, loadTickets } from '../../redux/actions/ticketsAction';
import Header from '../header/header.jsx';
import TabsList from '../tabsList/tabsList.jsx';
import Filters from '../filters/filters.jsx';
import Spinner from '../spinner/spinner.jsx';
import TicketList from '../ticketList/ticketList.jsx';

import styles from './app.module.scss';
import '../../global.scss';

function App() {
  const dispatch = useDispatch();
  const { searchId, isLoading, isError } = useSelector((state) => state.TicketsReducer);
  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (typeof searchId === 'string') {
      dispatch(loadTickets(searchId));
    }
  }, [searchId]);

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header />
      </div>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__aside}>
          <Filters />
        </aside>
        <main className={styles.app__main}>
          {isError ? <span>Что-то пошло не так. {isError}</span> : null}
          <TabsList />
          <Spinner isLoading={isLoading} />
          <TicketList />
        </main>
      </div>
    </div>
  );
}

export default App;
