import create from 'zustand';

const useGeneralStore = create(set => ({
  isLoading: false,
  showLoading: () => set({isLoading: true}),
  hideLoading: () => set({isLoading: false}),
}));

export default useGeneralStore;
