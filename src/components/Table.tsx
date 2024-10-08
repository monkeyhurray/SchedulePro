import React from 'react';
import CalendarHead from '@/components/CalendarHead';
import CalendarBody from '@/components/CalendarBody';

const Table = () => {
  return (
    <>
      <table>
        <CalendarHead />
        <CalendarBody />
      </table>
    </>
  );
};

export default Table;
