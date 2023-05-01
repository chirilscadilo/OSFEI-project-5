import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { getBooksApi } from "../api/getBooks-slice";
import searchSlice from './searchSlice';
import bookDetailSlice from './bookDetailSlice';
import favoriteSlice from './favoriteSlice';

const reducers = combineReducers({
    [getBooksApi.reducerPath]:getBooksApi.reducer,
    search: searchSlice,
    bookDetail: bookDetailSlice,
    favorite: favoriteSlice,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(getBooksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);