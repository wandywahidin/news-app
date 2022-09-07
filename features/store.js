import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import newsReducer from './news/newsSlice'

const combinedReducer = combineReducers({
    news : newsReducer
  });
  
  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };
  
  export const makeStore = () =>
    configureStore({
      reducer,
    });
  
  export const wrapper = createWrapper(makeStore, { debug: true });
  