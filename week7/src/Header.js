import React from 'react';
import * as DateUtil from './util/DateUtil';
import style from './Header.module.css';

const Header = ({}) => (
  <div className={style.header}>
    <h1 className="title">The INFO6150 News</h1>
    <time dateTime={DateUtil.getTimeDateInISOFormatForToday()}>
        {DateUtil.getTodayInWeekdayMonthDayYearFormat()}
    </time>
  </div>
);

export default Header;
