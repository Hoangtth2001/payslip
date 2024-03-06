import { Keyboard } from 'react-native';
import { CommonActions, StackActions, createNavigationContainerRef } from '@react-navigation/native';

import { RouterPathValue } from 'types/router';

const navigationRef = createNavigationContainerRef();

const reset = (routePath: RouterPathValue, params = {}): void => {
  navigationRef.isReady() &&
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: routePath, params }],
      }),
    );
};

const navigate = (routePath: RouterPathValue, params?: object): void => {
  navigationRef.isReady() && navigationRef.dispatch(CommonActions.navigate(routePath, params));
};

const goBack = (): boolean => {
  Keyboard.dismiss();
  navigationRef.isReady() && navigationRef.canGoBack() && navigationRef.dispatch(CommonActions.goBack());
  return true;
};

const push = (routePath: RouterPathValue, params?: object): void => {
  navigationRef.isReady() && navigationRef.dispatch(StackActions.push(routePath, params));
};

const replace = (routePath: RouterPathValue, params?: object): void => {
  navigationRef.isReady() && navigationRef.dispatch(StackActions.replace(routePath, params));
};

const pop = (count?: number): void => {
  navigationRef.isReady() && navigationRef.dispatch(StackActions.pop(count));
};

const popToTop = (): void => {
  navigationRef.isReady() && navigationRef.dispatch(StackActions.popToTop());
};

export { navigationRef, reset, navigate, goBack, push, replace, pop, popToTop };
