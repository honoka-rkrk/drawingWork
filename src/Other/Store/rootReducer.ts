import { combineReducers } from '@reduxjs/toolkit';
import isEntryReducer from './isEntry';

const rootReducer = combineReducers({
  isEntry: isEntryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
