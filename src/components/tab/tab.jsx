import React from 'react';
import PropTypes from 'prop-types';

import styles from './tab.module.scss';

function Tab({ label, selected, onClick }) {
  return (
    <li className={`${styles.tab} ${selected ? styles.tab__selected : null}`}>
      <button type="button" className={styles.tab__btn} onClick={onClick}>
        {label}
      </button>
    </li>
  );
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
