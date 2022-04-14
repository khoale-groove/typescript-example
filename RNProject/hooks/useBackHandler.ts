import { useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native';

type VoidFunc = () => void;

export const useBackHandler = (visible = false, onRequestClose: VoidFunc = () => {}) => {
  const backHandler = useCallback(() => {
    if (typeof onRequestClose === 'function') {
      onRequestClose();
      return true;
    }
    return false;
  }, [onRequestClose]);
  useEffect(
    () => () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    },
    [backHandler],
  );
  useEffect(() => {
    if (visible) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }
  }, [visible, backHandler]);
};
