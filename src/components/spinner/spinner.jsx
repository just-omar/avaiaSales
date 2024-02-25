import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

function Spinner({ isLoading }) {
  return <Spin size="large" spinning={isLoading} />;
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
