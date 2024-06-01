import { create } from "zustand";

type CartStore = {
  balance: number;
  addProduct: () => void;
  removeProduct: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  balance: 0,
  addProduct: () =>
    set((state: { balance: number }) => ({ balance: state.balance + 1 })),
  removeProduct: () =>
    set((state: { balance: number }) => ({ balance: state.balance - 1 })),
}));

export default useCartStore;
