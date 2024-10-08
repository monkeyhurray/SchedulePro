import React from 'react';
import { WEEK } from '@/app/constants/dateName';

const CalendarHead = () => {
  return (
    <thead>
      <tr>
        {WEEK.map((date, i) => {
          return <td key={i}>{date}</td>;
        })}
      </tr>
    </thead>
  );
};

export default CalendarHead;
