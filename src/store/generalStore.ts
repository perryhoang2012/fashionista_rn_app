import {storage} from '@utils/storageMMKV';
import {create} from 'zustand';

interface GeneralState {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  firstTimeEnterApp: boolean;
  setFirstTimeEnterApp: (status: boolean) => void;
}

const useGeneralStore = create<GeneralState>(set => ({
  isLoading: false,
  firstTimeEnterApp: storage.contains('firstTimeEnterApp')
    ? storage.getBoolean('firstTimeEnterApp') ?? true
    : true,
  showLoading: () => set({isLoading: true}),
  hideLoading: () => set({isLoading: false}),
  setFirstTimeEnterApp: (status: boolean) => {
    storage.set('firstTimeEnterApp', status);
    set({firstTimeEnterApp: status});
  },
}));

export default useGeneralStore;
