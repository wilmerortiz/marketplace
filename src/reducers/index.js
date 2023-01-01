import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default combineReducers({
  // Add your reducers here
  counter: counterReducer,
})
