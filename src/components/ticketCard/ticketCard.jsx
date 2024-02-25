import React from 'react';
import { useSelector } from 'react-redux';
import { add, format } from 'date-fns';
import PropTypes from 'prop-types';

import InfoBlock from '../infoBlock/infoBlock.jsx';

import styles from './ticketCard.module.scss';

function TicketCard({ ticket }) {
  const labels = useSelector((state) => Object.values(state.FilterReducer));
  const { price, carrier, segments } = ticket;
  const [to, back] = segments;
  const timeInterval = (time, interval) => {
    const departure = new Date(time);
    const arrival = add(departure, { minutes: interval });
    return `${format(departure, 'kk:mm')} - ${format(arrival, 'kk:mm')}`;
  };

  const flightTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}мин`;
  };

  const changeCount = (count) => {
    const label = labels.filter((el) => el.stopsCount === count);
    return label[0].label;
  };

  const infoRow = (direction) => (
    <React.Fragment>
      <InfoBlock
        header={`${direction.origin} - ${direction.destination}`}
        info={timeInterval(direction.date, direction.duration)}
      />
      <InfoBlock header="В пути" info={flightTime(direction.duration)} />
      <InfoBlock header={changeCount(direction.stops.length)} info={direction.stops.join(', ')} />
    </React.Fragment>
  );

  return (
    <div className={styles.ticketCard}>
      <div className={styles.ticketCard__header}>
        <span className={styles.ticketCard__price}>{price}</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Aviacompany logo" />
      </div>
      <div className={styles.ticketCard__info}>
        {infoRow(to)}
        {infoRow(back)}
      </div>
    </div>
  );
}

TicketCard.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }),
};

export default TicketCard;
