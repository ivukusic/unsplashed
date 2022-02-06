import mockAsyncStorage from './__mocks__/@react-native-comunity/async-storage/index';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
