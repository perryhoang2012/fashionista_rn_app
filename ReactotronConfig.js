import Reactotron, {networking, openInEditor} from 'reactotron-react-native';

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
  .connect();
