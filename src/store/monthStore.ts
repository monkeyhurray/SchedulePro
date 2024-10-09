import { create } from 'zustand';

import type { monthStoreType } from '@/types/monthTypes';

const initialState = {
  chooseMonth: 0,
};

export const useMonthStore = create<monthStoreType>((set) => ({
  ...initialState,
  setPlusChooseMonth: () =>
    set((state) => ({ chooseMonth: state.chooseMonth + 1 })),
  setMinusChooseMonth: () =>
    set((state) => ({ chooseMonth: state.chooseMonth - 1 })),
}));
