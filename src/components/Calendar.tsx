'use client';

import Table from './Table';
import React from 'react';
import dayjs from '@/util/dayjs';

const Calendar = () => {
  const year = dayjs().year();
  const month = dayjs().month() + 1;

  return (
    <>
      <p>
        <span>이전 달</span>
        <span>{year}년</span>
        <span>{month}월</span>
        <span>다음 달</span>
      </p>
      <Table />
    </>
  );
};

export default Calendar;
