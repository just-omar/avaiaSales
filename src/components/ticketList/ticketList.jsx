import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import TicketCard from '../ticketCard/ticketCard.jsx';
import ShowMore from '../showMore/showMore.jsx';

import styles from './ticketList.module.scss';
import { filterTickets, sortTickets } from './utils.js';

function TicketList() {
  const { tickets, viewCount } = useSelector((state) => state.TicketsReducer);
  const { selectedKey } = useSelector((state) => state.TabsReducer);
  const filters = useSelector((state) => {
    return Object.values(state.FilterReducer).reduce((newArr, item) => {
      if (item.stopsCount !== undefined && item.checked) {
        newArr.push(item.stopsCount);
      }
      return newArr;
    }, []);
  });

  const filteredTickets = useMemo(() => {
    return filterTickets(tickets, filters);
  }, [tickets, filters]);

  const sortedTickets = useMemo(() => {
    return sortTickets(filteredTickets, selectedKey);
  }, [filteredTickets, selectedKey]);

  const viewArr = sortedTickets.slice(0, viewCount);

  return (
    <React.Fragment>
      <ul className={styles.ticketList}>
        {viewArr.map((ticket) => (
          <TicketCard
            key={`${ticket.price}_${ticket.segments[0].duration}_${ticket.segments[1].duration}`}
            ticket={ticket}
          />
        ))}
      </ul>
      {viewArr.length ? <ShowMore /> : <span>Рейсов, удовлетворяющих условиям поиска, не найдено</span>}
    </React.Fragment>
  );
}

export default TicketList;
