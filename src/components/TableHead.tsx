import React from 'react';
import { useMonthStore } from '@/store/monthStore';
import { useSelectMonth } from '@/hooks/useCalendarHook';

const TableHead = () => {
  const { setPlusChooseMonth, setMinusChooseMonth } = useMonthStore();
  const { year, month } = useSelectMonth();

  return (
    <div>
      <p>
        <span onClick={() => setMinusChooseMonth()}>이전 달</span>
        <span>{year}년</span>
        <span>{month}</span>
        <span onClick={() => setPlusChooseMonth()}>다음 달</span>
      </p>
    </div>
  );
};

export default TableHead;
