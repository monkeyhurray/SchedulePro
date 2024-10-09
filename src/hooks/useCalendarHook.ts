import dayjs from '@/util/dayjs';
import { WEEK } from '@/constants/dateName';
import { useMonthStore } from '@/store/monthStore';
import { sliceThisMonth } from '@/util/monthSlice';

const useSelectMonth = () => {
  const { chooseMonth } = useMonthStore();

  const d = new Date(2024, dayjs().month() + chooseMonth);

  const year = dayjs(d).format('YYYY');
  const month = dayjs(d).format('MMMM');
  const day = dayjs(d).format('dddd');
  const lastDay = dayjs(d).endOf('month').format('D');
  return { year, month, day, lastDay };
};

const useSelectDays = () => {
  const { day, lastDay } = useSelectMonth();
  const monthDay: (string | number)[] = [];

  const emptyLength = WEEK.findIndex((e) => e === day);

  for (let i = 0; i < emptyLength; i++) {
    monthDay.push('');
  }

  for (let i = 1; i <= parseInt(lastDay); i++) {
    monthDay.push(i);
  }

  return sliceThisMonth(monthDay);
};

export { useSelectMonth, useSelectDays };
