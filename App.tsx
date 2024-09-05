import Loading from '@components/Loading';
import {setLocale} from '@locales';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './ReactotronConfig';
import RootNavigation from './src/navigation/RootNavigation';

// Create a client
const queryClient = new QueryClient();

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
