import { create } from "zustand";

type SectionState = {
  section: number;
  setSection: (section: number) => void;
};

export const useSectionStore = create<SectionState>()((set) => ({
  section: 0,
  setSection: (section) => set(() => ({ section })),
}));
