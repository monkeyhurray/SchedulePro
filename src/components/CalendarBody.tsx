import React from 'react';

import { calendarManth } from '@/util/monthSlice';

const CalendarBody = () => {
  //   const weekDay = sliceThisMonth(monthDay);

  return (
    <tbody>
      {calendarManth.map((weeks, weeksIdx) => {
        return (
          <tr key={weeksIdx}>
            {weeks.map((week, weekIdx) => {
              return <td key={weekIdx}>{week}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default CalendarBody;
