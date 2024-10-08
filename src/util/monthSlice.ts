import { WEEK } from '@/app/constants/dateName';
import dayjs from '@/util/dayjs';

const sliceThisMonth = (month: (string | number)[]) => {
  const monThToWeek = [];

  const divide = Math.ceil(month.length / 7);

  for (let i = 0; i < divide; i++) {
    const oneWeek = month.splice(0, 7);

    monThToWeek.push(oneWeek);
  }

  return monThToWeek;
};

const monthDay: (string | number)[] = [];

const emptyLength = WEEK.findIndex((e) => e === dayjs().date(1).format('dddd'));

for (let i = 0; i < emptyLength; i++) {
  monthDay.push('');
}

for (let i = 1; i <= dayjs().daysInMonth(); i++) {
  monthDay.push(i);
}

const calendarManth = sliceThisMonth(monthDay);

export { calendarManth };
