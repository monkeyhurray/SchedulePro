import { useSelectDays } from '@/hooks/useCalendarHook';

const CalendarBody = () => {
  const calendarMonth = useSelectDays();

  return (
    <tbody>
      {calendarMonth.map((weeks, weeksIdx) => {
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
