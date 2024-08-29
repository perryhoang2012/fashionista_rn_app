import {RootStackParamList} from '@models/navigation';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function push(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function pop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

export function replace(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function getRouteName(): string | undefined {
  if (navigationRef.isReady() && navigationRef.getCurrentRoute()) {
    return navigationRef.getCurrentRoute()?.name;
  }
  return undefined;
}
const NavigationService = {
  navigate,
  push,
  goBack,
  replace,
  popToTop,
  pop,
  getRouteName,
};

export default NavigationService;
