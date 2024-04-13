import { create } from 'zustand'

interface IPopUp {
  show: boolean
  chageShow: (action: boolean) => void
}

export const usePopUpStore = create<IPopUp>((set) => ({
  show: false,
  chageShow: (action) =>
    set((state) => ({
      show: (state.show = action),
    })),
}))
