import Reactotron, {networking, openInEditor} from 'reactotron-react-native';
import {QueryClientManager, reactotronReactQuery} from 'reactotron-react-query';
import {queryClient} from '@utils/queryClient';

const queryClientManager = new QueryClientManager({
  queryClient,
});

if (__DEV__) {
  Reactotron.configure({name: 'Fashionista'})
    .useReactNative({
      asyncStorage: true,
      networking: true,
      editor: false,
      errors: {veto: stackFrame => false},
      overlay: {
        isVisible: true,
      },
    })
    .use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    )
    .use(openInEditor())
    .use(reactotronReactQuery(queryClientManager))
    .configure({
      onDisconnect: () => {
        queryClientManager.unsubscribe();
      },
    })
    .connect();
}
