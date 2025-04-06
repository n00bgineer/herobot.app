import { create } from 'zustand'

const useStore = create((set) => ({
  // GLOBAL STATES
  user: null,
  globalAlert: null,

  // SETTER METHODS
  setUser: (user) => set(() => ({ user })),
  setGlobalAlert: (globalAlert) => set(() => ({ globalAlert })),

  // RE-SETTER METHODS
  resetUser: () => set(() => ({ user: null })),
  resetGlobalAlert: () => set(() => ({ globalAlert: null })),
}))

export default useStore
