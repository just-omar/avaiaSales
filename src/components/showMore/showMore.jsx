import React from 'react';
import { useDispatch } from 'react-redux';

import { showMore } from '../../redux/actions/ticketsAction';

import styles from './showMore.module.scss';

function ShowMore() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(showMore());
  };

  return (
    <button className={styles.showMore} onClick={clickHandler}>
      Показать ещё 5 билетов
    </button>
  );
}

export default ShowMore;
