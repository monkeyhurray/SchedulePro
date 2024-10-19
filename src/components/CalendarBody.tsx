import { useSelectDays } from '@/hooks/useCalendarHook';
import styles from '@/styles/components/CalendarBody.module.scss';
const CalendarBody = () => {
  const calendarMonth = useSelectDays();

  return (
    <tbody className={styles['calendar-table__body']}>
      {calendarMonth.map((weeks, weeksIdx) => {
        return (
          <tr className={styles['calendar-table__body__tr']} key={weeksIdx}>
            {weeks.map((week, weekIdx) => {
              return (
                <td
                  className={styles['calendar-table__body__tr__td']}
                  key={weekIdx}
                >
                  {week}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default CalendarBody;
