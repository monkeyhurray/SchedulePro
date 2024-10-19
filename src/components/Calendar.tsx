'use client';

import styles from '@/styles/components/Calendar.module.scss';
import Table from '@/components/Table';
import TableHead from '@/components/TableHead';

const Calendar = () => {
  return (
    <div className={styles['main-calendar']}>
      <TableHead />
      <Table />
    </div>
  );
};

export default Calendar;
