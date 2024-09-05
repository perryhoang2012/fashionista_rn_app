import Loading from '@components/Loading';
import {setLocale} from '@locales';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@utils/queryClient';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './ReactotronConfig';
import RootNavigation from './src/navigation/RootNavigation';

// Create a client

function App(): JSX.Element {
  setLocale('en');

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigation />
        <Loading />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
