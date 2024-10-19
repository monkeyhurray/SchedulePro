import React from 'react';
import CalendarHead from '@/components/CalendarHead';
import CalendarBody from '@/components/CalendarBody';
import styles from '@/styles/components/Table.module.scss';

const Table = () => {
  return (
    <div>
      <table className={styles['calendar-table']}>
        <CalendarHead />
        <CalendarBody />
      </table>
    </div>
  );
};

export default Table;
