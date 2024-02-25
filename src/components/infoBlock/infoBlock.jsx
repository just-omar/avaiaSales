import React from 'react';
import PropTypes from 'prop-types';

import styles from './infoBlock.module.scss';

function InfoBlock({ header, info }) {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.infoBlock__header}>{header}</span>
      <span className={styles.infoBlock__info}>{info}</span>
    </div>
  );
}

InfoBlock.propTypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default InfoBlock;
