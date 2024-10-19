import React from 'react';
import styles from '@/styles/components/CalendarHead.module.scss';
import { WEEK } from '@/constants/dateName';

const CalendarHead = () => {
  return (
    <thead className={styles['calendar-table__head']}>
      <tr>
        {WEEK.map((date, i) => {
          return (
            <td className={styles['calendar-table__head__td']} key={i}>
              {date}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default CalendarHead;
