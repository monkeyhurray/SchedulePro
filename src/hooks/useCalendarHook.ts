import dayjs from '@/util/dayjs';
import { WEEK } from '@/constants/dateName';
import { useMonthStore } from '@/store/monthStore';
import { sliceThisMonth } from '@/util/monthSlice';

const useSelectMonth = () => {
  const { chooseMonth } = useMonthStore();

  const currentD = dayjs().add(chooseMonth, 'month').set('date', 1);

  const year = dayjs(currentD).format('YYYY');
  const month = dayjs(currentD).format('MMMM');
  const day = dayjs(currentD).format('dddd');
  const lastDay = dayjs(currentD).endOf('month').format('D');

  const prevMonth = dayjs(currentD.subtract(1, 'month'))
    .endOf('month')
    .format('D');

  return { year, month, day, lastDay, prevMonth };
};

const useSelectDays = () => {
  const { day, lastDay, prevMonth } = useSelectMonth();
  const monthDay: (string | number)[] = [];

  const emptyLength = WEEK.findIndex((e) => e === day);

  for (
    let i = parseInt(prevMonth) - emptyLength + 1;
    i <= parseInt(prevMonth);
    i++
  ) {
    monthDay.push(i);
  }

  for (let i = 1; i <= parseInt(lastDay); i++) {
    monthDay.push(i);
  }

  const sliceMonth = sliceThisMonth([...monthDay]);
  const nextDays = 7 - sliceMonth[sliceMonth.length - 1].length;

  for (let i = 1; i <= nextDays; i++) {
    monthDay.push(i);
  }

  return sliceThisMonth(monthDay);
};

export { useSelectMonth, useSelectDays };
