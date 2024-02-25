import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/actions/filterAction.js';

import styles from './filters.module.scss';

function Filters() {
  const dispatch = useDispatch();
  const objFilters = useSelector((state) => state.FilterReducer);
  const changeHandler = (evt) => {
    dispatch(selectFilter(evt.target.id, objFilters));
  };
  return (
    <div className={styles.filters}>
      <span className={styles.filters__header}>Количество пересадок</span>
      <ul className={styles.filters__list}>
        {Object.entries(objFilters).map(([key, value]) => (
          <li className={styles.filters__item} key={key}>
            <label htmlFor={key} className={styles.filters__label}>
              <input
                type="checkbox"
                id={key}
                checked={value.checked}
                className={styles.filters__input}
                onChange={changeHandler}
              />
              <span className={styles.filters__checkbox} />
              {value.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
