import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import './ReactotronConfig';
import {setLocale} from '@locales';

function App(): JSX.Element {
  setLocale('en');

  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
