import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { imageReducer } from './image';

const rootReducer = combineReducers({
  image: imageReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: __DEV__,
  whitelist: ['image'],
};

const reducer = persistReducer(persistConfig, rootReducer);

const createStore = (preloadedState?: RootState) =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
      const middlewareOptions = {
        thunk: false,
        immutableCheck: true,
        serializableCheck: false,
      };

      if (!__DEV__ || process.env.JEST_WORKER_ID) {
        return getDefaultMiddleware(middlewareOptions);
      }
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware(middlewareOptions).concat(createDebugger());
    },
    devTools: false,
    ...(preloadedState ? { preloadedState } : {}),
  });

const store = createStore();
const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
