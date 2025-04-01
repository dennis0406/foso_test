import {createRef} from 'react';
import {DrawerActions, StackActions} from '@react-navigation/native';

import type {ScreenNames} from '../types';

export const navigationRef = createRef<any>();

export const isMountedRef = createRef<any>();

export function navigate(name: ScreenNames, params = {}) {
  navigationRef.current?.navigate(name, params);
}

export function pushNav(name: ScreenNames, params = {}) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function canGoBack() {
  return navigationRef.current?.canGoBack();
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}
