import useGeneralStore from '@store/generalStore';
import {useEffect} from 'react';

const useFirstTime = () => {
  const firstTimeEnterApp = useGeneralStore(state => state.firstTimeEnterApp);
  const setFirstTimeEnterApp = useGeneralStore(
    state => state.setFirstTimeEnterApp,
  );

  useEffect(() => {
    if (firstTimeEnterApp) {
      setFirstTimeEnterApp(false);
    }
  }, [firstTimeEnterApp, setFirstTimeEnterApp]);
};

export default useFirstTime;
