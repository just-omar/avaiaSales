import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tab from '../tab/tab.jsx';
import { changeTab } from '../../redux/actions/tabsAction';

import styles from './tabsList.module.scss';

function TabsList() {
  const dispatch = useDispatch();
  const { items, selectedKey } = useSelector((state) => state.TabsReducer);
  const tabsArr = Object.entries(items);
  const clickHandler = (key) => {
    dispatch(changeTab(key));
  };

  return (
    <ul className={styles.tabsList}>
      {tabsArr.map((item) => (
        <Tab key={item[0]} label={item[1]} selected={selectedKey === item[0]} onClick={() => clickHandler(item[0])} />
      ))}
    </ul>
  );
}

export default TabsList;
