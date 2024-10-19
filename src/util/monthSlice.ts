export const sliceThisMonth = (month: (string | number)[]) => {
  const monThToWeek = [];

  const divide = Math.ceil(month.length / 7);

  for (let i = 0; i < divide; i++) {
    const oneWeek = month.splice(0, 7);

    monThToWeek.push(oneWeek);
  }
  return monThToWeek;
};
