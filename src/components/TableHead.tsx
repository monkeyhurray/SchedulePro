import React from 'react';

import styles from '@/styles/components/TableHead.module.scss';
import { useMonthStore } from '@/store/monthStore';
import { useSelectMonth } from '@/hooks/useCalendarHook';

const TableHead = () => {
  const { setPlusChooseMonth, setMinusChooseMonth } = useMonthStore();
  const { year, month } = useSelectMonth();

  return (
    <p className={styles['calendar-head']}>
      <span onClick={() => setMinusChooseMonth()}>이전 달</span>
      <span>
        {year}년 {month}
      </span>

      <span onClick={() => setPlusChooseMonth()}>다음 달</span>
    </p>
  );
};

export default TableHead;
