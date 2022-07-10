import create from "zustand";

type State = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: string;
};

const useStore = create<State>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true, user: "charoy" }),
  logout: () => set({ isAuthenticated: false, user: "" }),
  user: "",
}));

export default useStore;
