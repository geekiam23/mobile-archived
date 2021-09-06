import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import {jest} from '@jest/globals';
import '@testing-library/react-native';
import 'unfetch/polyfill';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
