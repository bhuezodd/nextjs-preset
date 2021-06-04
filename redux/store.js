import {createStore, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'

import storage from './storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
import {createWrapper} from 'next-redux-wrapper';

const initialState = {};

const middleware = [thunk]
export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

const makeStore = () => store

export const persistor = persistStore(store)

export const wrapper = createWrapper(makeStore)
